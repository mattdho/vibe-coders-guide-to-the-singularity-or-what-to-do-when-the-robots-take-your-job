/**
 * Progress Tracker
 * Tracks and displays reading progress through chapters
 */

class ProgressTracker {
    constructor() {
        this.currentProgress = 0;
        this.init();
    }

    init() {
        this.createProgressIndicator();
        this.bindScrollEvents();
    }

    createProgressIndicator() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'chapter-progress-container';
        progressContainer.innerHTML = `
            <div class="chapter-progress-bar">
                <div class="progress-fill" id="chapter-progress-fill"></div>
            </div>
            <div class="progress-info">
                <span class="progress-text">0% of chapter</span>
                <span class="reading-time" id="reading-time"></span>
            </div>
        `;

        // Insert at the top of content when content loads
        this.insertProgressIndicator = (content) => {
            if (content) {
                content.insertBefore(progressContainer, content.firstChild);
            }
        };

        // Watch for content changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const content = document.getElementById('content');
                    if (content && content.children.length > 0 && !content.querySelector('.chapter-progress-container')) {
                        this.insertProgressIndicator(content);
                        this.updateProgress(); // Initial update
                    }
                }
            });
        });

        // Start observing
        const content = document.getElementById('content');
        if (content) {
            observer.observe(content, { childList: true });
            // If content already exists, insert immediately
            if (content.children.length > 0) {
                this.insertProgressIndicator(content);
            }
        }
    }

    bindScrollEvents() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateProgress() {
        const content = document.getElementById('content');
        if (!content) return;

        const contentRect = content.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const contentHeight = content.offsetHeight;
        
        // Calculate progress based on content visibility
        const scrollTop = window.pageYOffset;
        const contentTop = content.offsetTop;
        const contentBottom = contentTop + contentHeight;
        
        const progress = Math.max(0, Math.min(100, 
            ((scrollTop - contentTop + windowHeight) / contentHeight) * 100
        ));
        
        this.currentProgress = progress;
        this.updateProgressUI(progress);
    }

    updateProgressUI(progress) {
        const progressFill = document.getElementById('chapter-progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${Math.round(progress)}% of chapter`;
        }
        
        this.updateReadingTime();
    }

    updateReadingTime() {
        const content = document.getElementById('content');
        if (!content) return;

        const text = content.textContent || '';
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        const totalMinutes = Math.ceil(words / wordsPerMinute);
        const remainingWords = words * (1 - (this.currentProgress / 100));
        const remainingMinutes = Math.ceil(remainingWords / wordsPerMinute);
        
        const readingTimeEl = document.getElementById('reading-time');
        if (readingTimeEl) {
            if (remainingMinutes <= 1) {
                readingTimeEl.textContent = 'Almost finished!';
            } else {
                readingTimeEl.textContent = `${remainingMinutes} min remaining`;
            }
        }
    }
}

// Initialize progress tracker
window.progressTracker = new ProgressTracker(); 