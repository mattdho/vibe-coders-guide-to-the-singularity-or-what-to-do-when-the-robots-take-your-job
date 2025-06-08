/**
 * Swipe Navigation
 * Handles touch gestures for mobile navigation between chapters
 */

class SwipeNavigation {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 100;
        this.maxVerticalDistance = 150;
        this.init();
    }

    init() {
        this.bindTouchEvents();
        this.createSwipeIndicators();
    }

    bindTouchEvents() {
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        document.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
        this.touchStartY = e.changedTouches[0].screenY;
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.touchEndY = e.changedTouches[0].screenY;
        this.handleSwipe();
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = Math.abs(this.touchEndY - this.touchStartY);
        
        // Only process horizontal swipes
        if (Math.abs(deltaX) < this.minSwipeDistance || deltaY > this.maxVerticalDistance) {
            return;
        }
        
        if (deltaX > 0) {
            // Swipe right - previous chapter
            this.navigatePrevious();
        } else {
            // Swipe left - next chapter
            this.navigateNext();
        }
    }

    navigatePrevious() {
        const currentFile = window.contentLoader?.currentContent;
        const prevFile = this.getPreviousChapter(currentFile);
        
        if (prevFile) {
            this.showSwipeAnimation('left');
            setTimeout(() => {
                window.contentLoader?.loadContent(prevFile);
            }, 150);
        }
    }

    navigateNext() {
        const currentFile = window.contentLoader?.currentContent;
        const nextFile = this.getNextChapter(currentFile);
        
        if (nextFile) {
            this.showSwipeAnimation('right');
            setTimeout(() => {
                window.contentLoader?.loadContent(nextFile);
            }, 150);
        }
    }

    getPreviousChapter(currentFile) {
        const chapters = [
            '00-introduction.md',
            '01-bullshit-jobs-age-of-automation.md',
            '02-prompt-or-be-prompted.md',
            '03-myth-of-ai-proof-jobs.md',
            '04-resumes-are-for-cowards.md',
            '05-automate-yourself-before-they-do.md',
            '06-side-hustles-are-structural.md',
            '07-freelance-like-anarchist.md',
            '08-ai-copilot-isnt-your-friend.md',
            '09-build-publicly-share-loudly.md',
            '10-networked-work-decentralized-survival.md',
            '11-The-End-of-Work-Is-Not-the-End-of-You.md',
            '12-fully-automated-vibe-collectivism.md',
            'outro.md'
        ];
        
        const currentIndex = chapters.indexOf(currentFile);
        return currentIndex > 0 ? chapters[currentIndex - 1] : null;
    }

    getNextChapter(currentFile) {
        const chapters = [
            '00-introduction.md',
            '01-bullshit-jobs-age-of-automation.md',
            '02-prompt-or-be-prompted.md',
            '03-myth-of-ai-proof-jobs.md',
            '04-resumes-are-for-cowards.md',
            '05-automate-yourself-before-they-do.md',
            '06-side-hustles-are-structural.md',
            '07-freelance-like-anarchist.md',
            '08-ai-copilot-isnt-your-friend.md',
            '09-build-publicly-share-loudly.md',
            '10-networked-work-decentralized-survival.md',
            '11-The-End-of-Work-Is-Not-the-End-of-You.md',
            '12-fully-automated-vibe-collectivism.md',
            'outro.md'
        ];
        
        const currentIndex = chapters.indexOf(currentFile);
        return currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
    }

    showSwipeAnimation(direction) {
        const indicator = document.createElement('div');
        indicator.className = `swipe-indicator swipe-${direction}`;
        indicator.innerHTML = direction === 'left' ? '‹' : '›';
        
        document.body.appendChild(indicator);
        
        setTimeout(() => {
            indicator.classList.add('animate');
        }, 10);
        
        setTimeout(() => {
            document.body.removeChild(indicator);
        }, 300);
    }

    createSwipeIndicators() {
        // Add visual hints for swipe navigation
        const style = document.createElement('style');
        style.textContent = `
            .swipe-indicator {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                font-size: 3rem;
                color: var(--accent-primary);
                z-index: var(--z-modal);
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
                font-family: var(--font-mono);
            }
            
            .swipe-left {
                left: 2rem;
            }
            
            .swipe-right {
                right: 2rem;
            }
            
            .swipe-indicator.animate {
                opacity: 1;
                transform: translateY(-50%) scale(1.2);
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize swipe navigation
window.swipeNavigation = new SwipeNavigation(); 