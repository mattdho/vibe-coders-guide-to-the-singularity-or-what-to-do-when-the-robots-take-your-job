/**
 * Theme Management
 * Handles dark/light mode toggle and system preference detection
 */

class ThemeManager {
    constructor() {
        this.currentTheme = this.getInitialTheme();
        this.setupEventListeners();
        this.applyTheme(this.currentTheme);
    }

    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        // Default to dark theme
        return 'dark';
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    this.applyTheme(e.matches ? 'light' : 'dark');
                }
            });
        }

        // Keyboard shortcut (Ctrl/Cmd + Shift + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.saveTheme(newTheme);
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme toggle button state
        this.updateThemeToggleButton();
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themechange', { 
            detail: { theme } 
        }));
    }

    updateThemeToggleButton() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const isDark = this.currentTheme === 'dark';
            themeToggle.setAttribute('aria-label', 
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    // Method to programmatically set theme
    setTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.applyTheme(theme);
            this.saveTheme(theme);
        }
    }

    // Method to reset to system preference
    resetToSystemTheme() {
        localStorage.removeItem('theme');
        const systemTheme = window.matchMedia && 
            window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        this.applyTheme(systemTheme);
    }
}

// Initialize theme manager
window.themeManager = new ThemeManager();

// Export for use in other modules
window.ThemeManager = ThemeManager;

// Add CSS for theme transitions
const style = document.createElement('style');
style.textContent = `
    /* Theme transition styles */
    * {
        transition: background-color 0.2s ease-in-out, 
                   color 0.2s ease-in-out, 
                   border-color 0.2s ease-in-out,
                   box-shadow 0.2s ease-in-out;
    }

    /* Disable transitions during theme change to prevent flash */
    .theme-transitioning * {
        transition: none !important;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        :root {
            --accent-primary: #00ff00;
            --accent-secondary: #ff00ff;
            --accent-tertiary: #00ffff;
        }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            transition: none !important;
            animation: none !important;
        }
    }
`;

document.head.appendChild(style);

// Add theme transition class temporarily during theme changes
window.addEventListener('themechange', () => {
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 200);
});