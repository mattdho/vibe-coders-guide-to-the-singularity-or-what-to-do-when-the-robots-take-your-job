/**
 * Main Application
 * Coordinates all modules and handles global functionality
 */

class VibeCodersApp {
    constructor() {
        this.isLoading = true;
        this.modules = {};
        this.init();
    }

    async init() {
        try {
            // Show loading screen
            this.showLoadingScreen();

            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }

            // Initialize modules
            await this.initializeModules();

            // Setup global event listeners
            this.setupGlobalEventListeners();

            // Setup accessibility features
            this.setupAccessibility();

            // Setup performance monitoring
            this.setupPerformanceMonitoring();

            // Setup error handling
            this.setupErrorHandling();

            // Hide loading screen
            await this.hideLoadingScreen();

            // Initialize from URL if needed
            this.handleInitialNavigation();

            console.log('🚀 Vibe Coders app initialized successfully');

        } catch (error) {
            console.error('Failed to initialize app:', error);
            this.showErrorState(error);
        }
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
    }

    async hideLoadingScreen() {
        return new Promise(resolve => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                // Add a small delay to ensure everything is ready
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    resolve();
                }, 500);
            } else {
                resolve();
            }
        });
    }

    async initializeModules() {
        // Modules are already initialized by their respective scripts
        // This method can be used for any additional coordination
        
        // Store references to global modules
        this.modules = {
            contentLoader: window.contentLoader,
            navigation: window.navigation,
            themeManager: window.themeManager,
            markdownParser: window.MarkdownParser
        };

        // Verify all modules loaded correctly
        const missingModules = Object.entries(this.modules)
            .filter(([name, module]) => !module)
            .map(([name]) => name);

        if (missingModules.length > 0) {
            throw new Error(`Failed to load modules: ${missingModules.join(', ')}`);
        }
    }

    setupGlobalEventListeners() {
        // Handle notice dismissal
        this.setupNoticeHandlers();

        // Handle keyboard shortcuts
        this.setupKeyboardShortcuts();

        // Handle external links
        this.setupExternalLinks();

        // Handle smooth scrolling
        this.setupSmoothScrolling();

        // Handle focus management
        this.setupFocusManagement();
    }

    setupNoticeHandlers() {
        const noticeClose = document.querySelector('.notice-close');
        const notice = document.getElementById('living-notice');

        if (noticeClose && notice) {
            noticeClose.addEventListener('click', () => {
                notice.classList.add('hidden');
                localStorage.setItem('notice-dismissed', 'true');
            });

            // Check if notice was previously dismissed
            if (localStorage.getItem('notice-dismissed') === 'true') {
                notice.classList.add('hidden');
            }
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Escape key - close modals, menus, etc.
            if (e.key === 'Escape') {
                this.handleEscapeKey();
            }

            // Ctrl/Cmd + K - focus search (if implemented)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.focusSearch();
            }

            // Ctrl/Cmd + / - show keyboard shortcuts
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.showKeyboardShortcuts();
            }
        });
    }

    setupExternalLinks() {
        // Add target="_blank" and rel="noopener" to external links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href) {
                const url = new URL(link.href, window.location.origin);
                if (url.origin !== window.location.origin) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            }
        });
    }

    setupSmoothScrolling() {
        // Handle anchor links with smooth scrolling
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    setupFocusManagement() {
        // Skip to main content link for accessibility
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-primary);
            color: var(--bg-primary);
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.2s;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Focus management for modals and overlays
        this.setupModalFocusTrap();
    }

    setupModalFocusTrap() {
        // This would be implemented when modals are added
        // For now, just a placeholder
    }

    setupAccessibility() {
        // Add ARIA live region for dynamic content updates
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);

        // Announce content changes
        window.addEventListener('contentchange', (e) => {
            if (e.detail && e.detail.message) {
                this.announceToScreenReader(e.detail.message);
            }
        });

        // Add screen reader only styles
        const srOnlyStyles = document.createElement('style');
        srOnlyStyles.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(srOnlyStyles);
    }

    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            // This would integrate with a real performance monitoring service
            console.log('Performance monitoring initialized');
        }

        // Monitor long tasks
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 50) {
                            console.warn('Long task detected:', entry);
                        }
                    }
                });
                observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
                // PerformanceObserver not supported
            }
        }
    }

    setupErrorHandling() {
        // Global error handler
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            this.handleError(e.error);
        });

        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.handleError(e.reason);
        });
    }

    handleError(error) {
        // In a production app, this would send errors to a monitoring service
        console.error('Application error:', error);
        
        // Show user-friendly error message
        this.showErrorToast('Something went wrong. Please try refreshing the page.');
    }

    showErrorToast(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 12px 16px;
            border-radius: 4px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);
    }

    handleEscapeKey() {
        // Close any open modals, menus, etc.
        const openModal = document.querySelector('.modal-overlay');
        if (openModal) {
            openModal.remove();
            return;
        }

        // Close mobile menu
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            this.modules.navigation?.closeMobileMenu();
            return;
        }
    }

    focusSearch() {
        // This would focus a search input if implemented
        console.log('Search focus requested');
    }

    showKeyboardShortcuts() {
        // Show keyboard shortcuts modal
        const shortcuts = [
            { key: 'Ctrl/Cmd + Shift + T', description: 'Toggle theme' },
            { key: 'Ctrl/Cmd + K', description: 'Focus search' },
            { key: 'Ctrl/Cmd + /', description: 'Show keyboard shortcuts' },
            { key: 'Escape', description: 'Close modals/menus' }
        ];

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3>Keyboard Shortcuts</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-content">
                    <div class="shortcuts-list">
                        ${shortcuts.map(shortcut => `
                            <div class="shortcut-item">
                                <kbd>${shortcut.key}</kbd>
                                <span>${shortcut.description}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close handlers
        const closeModal = () => modal.remove();
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    handleInitialNavigation() {
        // This is handled by the content loader
        // Just ensure everything is coordinated
        if (window.location.hash) {
            console.log('Initial navigation to:', window.location.hash);
        }
    }

    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    showErrorState(error) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.innerHTML = `
                <div class="loading-content">
                    <h2>Failed to Load Application</h2>
                    <p>${error.message || 'An unexpected error occurred'}</p>
                    <button class="btn btn-primary" onclick="location.reload()">
                        Reload Page
                    </button>
                </div>
            `;
        }
    }

    // Public API methods
    getModule(name) {
        return this.modules[name];
    }

    isReady() {
        return !this.isLoading;
    }
}

// Initialize the application
window.vibeCodersApp = new VibeCodersApp();

// Add modal styles
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--z-modal);
        animation: fadeIn 0.2s ease-out;
    }

    .modal {
        background: var(--bg-primary);
        border: 1px solid var(--border-primary);
        border-radius: 0.5rem;
        max-width: 90vw;
        max-height: 90vh;
        overflow: auto;
        box-shadow: var(--shadow-large);
        animation: slideUp 0.2s ease-out;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-lg);
        border-bottom: 1px solid var(--border-primary);
    }

    .modal-header h3 {
        margin: 0;
        font-size: var(--font-size-lg);
    }

    .modal-close {
        background: none;
        border: none;
        font-size: var(--font-size-xl);
        color: var(--text-muted);
        cursor: pointer;
        padding: 0;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        transition: all var(--transition-fast);
    }

    .modal-close:hover {
        background: var(--bg-secondary);
        color: var(--text-primary);
    }

    .modal-content {
        padding: var(--space-lg);
    }

    .download-options {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        margin-top: var(--space-md);
    }

    .shortcuts-list {
        display: grid;
        gap: var(--space-md);
    }

    .shortcut-item {
        display: flex;
        align-items: center;
        gap: var(--space-md);
    }

    .shortcut-item kbd {
        background: var(--bg-secondary);
        border: 1px solid var(--border-primary);
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
        font-family: var(--font-mono);
        font-size: var(--font-size-sm);
        min-width: 8rem;
        text-align: center;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(20px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(modalStyles);