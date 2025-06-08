/**
 * Reading Controls
 * Provides enhanced reading experience controls
 */

class ReadingControls {
    constructor() {
        this.fontSize = 100;
        this.isReaderMode = false;
        this.init();
    }

    init() {
        this.createControls();
        this.bindEvents();
        this.loadUserPreferences();
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'reading-controls';
        controls.innerHTML = `
            <div class="reading-controls-panel">
                <button class="control-btn" id="decrease-font" aria-label="Decrease font size">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13H5v-2h14v2z"/>
                    </svg>
                </button>
                <span class="font-size-indicator">${this.fontSize}%</span>
                <button class="control-btn" id="increase-font" aria-label="Increase font size">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                </button>
                <div class="control-divider"></div>
                <button class="control-btn" id="reader-mode" aria-label="Toggle focus mode">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </button>
                <button class="control-btn" id="bookmark-btn" aria-label="Bookmark this section">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                </button>
            </div>
        `;
        
        document.body.appendChild(controls);
    }

    bindEvents() {
        document.getElementById('decrease-font').addEventListener('click', () => this.changeFontSize(-10));
        document.getElementById('increase-font').addEventListener('click', () => this.changeFontSize(10));
        document.getElementById('reader-mode').addEventListener('click', () => this.toggleReaderMode());
        document.getElementById('bookmark-btn').addEventListener('click', () => this.toggleBookmark());
    }

    changeFontSize(delta) {
        this.fontSize = Math.max(70, Math.min(150, this.fontSize + delta));
        document.documentElement.style.setProperty('--reading-font-scale', this.fontSize / 100);
        document.querySelector('.font-size-indicator').textContent = `${this.fontSize}%`;
        this.savePreferences();
    }

    toggleReaderMode() {
        this.isReaderMode = !this.isReaderMode;
        document.body.classList.toggle('reader-mode', this.isReaderMode);
        this.savePreferences();
    }

    toggleBookmark() {
        // Implementation for bookmarking current section
        const currentSection = this.getCurrentSection();
        console.log('Bookmarked:', currentSection);
        // Add visual feedback
        this.showToast('Section bookmarked!');
    }

    getCurrentSection() {
        const headers = document.querySelectorAll('#content h1, #content h2, #content h3');
        for (let header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= 100) {
                return header.textContent;
            }
        }
        return null;
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 2000);
    }

    savePreferences() {
        localStorage.setItem('reading-preferences', JSON.stringify({
            fontSize: this.fontSize,
            isReaderMode: this.isReaderMode
        }));
    }

    loadUserPreferences() {
        const saved = localStorage.getItem('reading-preferences');
        if (saved) {
            const prefs = JSON.parse(saved);
            this.fontSize = prefs.fontSize || 100;
            this.isReaderMode = prefs.isReaderMode || false;
            
            document.documentElement.style.setProperty('--reading-font-scale', this.fontSize / 100);
            document.querySelector('.font-size-indicator').textContent = `${this.fontSize}%`;
            document.body.classList.toggle('reader-mode', this.isReaderMode);
        }
    }
}

// Initialize reading controls
window.readingControls = new ReadingControls(); 