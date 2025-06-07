/**
 * Content Loader
 * Handles loading and displaying markdown content from GitHub
 */

class ContentLoader {
    constructor() {
        this.parser = new MarkdownParser();
        this.baseUrl = 'https://raw.githubusercontent.com/vibecoders/singularity-guide/main/';
        this.currentContent = null;
        this.contentCache = new Map();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Handle start reading button
        document.getElementById('start-reading')?.addEventListener('click', () => {
            this.loadContent('00-introduction.md');
        });

        // Handle download buttons
        document.getElementById('download-pdf')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadFile('pdf');
        });

        document.getElementById('download-epub')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadFile('epub');
        });

        document.getElementById('download-all')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showDownloadModal();
        });
    }

    async loadContent(filename) {
        try {
            this.showLoadingState();

            // Check cache first
            if (this.contentCache.has(filename)) {
                this.displayContent(this.contentCache.get(filename), filename);
                return;
            }

            const url = `${this.baseUrl}${filename}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status}`);
            }

            const markdown = await response.text();
            
            // Cache the content
            this.contentCache.set(filename, markdown);
            
            this.displayContent(markdown, filename);
            this.updateURL(filename);

        } catch (error) {
            console.error('Error loading content:', error);
            this.showErrorState(error.message);
        }
    }

    displayContent(markdown, filename) {
        const contentElement = document.getElementById('content');
        const heroElement = document.getElementById('hero');
        
        if (!contentElement) return;

        // Hide hero section when showing content
        if (heroElement && filename !== 'hero') {
            heroElement.style.display = 'none';
        }

        // Parse markdown to HTML
        const html = this.parser.parse(markdown);
        
        // Update content
        contentElement.innerHTML = html;
        
        // Add IDs to headers for navigation
        this.addHeaderIds(contentElement);
        
        // Update current content reference
        this.currentContent = filename;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update navigation
        this.updateNavigation(filename);
        
        // Hide loading state
        this.hideLoadingState();

        // Setup lazy loading for images
        this.setupLazyLoading(contentElement);
    }

    addHeaderIds(container) {
        const headers = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(header => {
            if (!header.id) {
                header.id = this.generateId(header.textContent);
            }
        });
    }

    generateId(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    }

    updateURL(filename) {
        const newUrl = `${window.location.origin}${window.location.pathname}#${filename.replace('.md', '')}`;
        history.pushState({ content: filename }, '', newUrl);
    }

    updateNavigation(filename) {
        // Update active state in TOC
        const tocLinks = document.querySelectorAll('.toc a');
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.file === filename) {
                link.classList.add('active');
            }
        });
    }

    showLoadingState() {
        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="loading-content">
                    <div class="loading-spinner"></div>
                    <p>Loading content...</p>
                </div>
            `;
        }
    }

    hideLoadingState() {
        // Loading state is replaced by content
    }

    showErrorState(message) {
        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.innerHTML = `
                <div class="error-state">
                    <h2>Error Loading Content</h2>
                    <p>${message}</p>
                    <button class="btn btn-primary" onclick="location.reload()">
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    setupLazyLoading(container) {
        const images = container.querySelectorAll('img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                if (img.dataset.src) {
                    imageObserver.observe(img);
                }
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            });
        }
    }

    downloadFile(format) {
        // In a real implementation, these would be actual download links
        const downloads = {
            pdf: 'https://github.com/vibecoders/singularity-guide/releases/download/latest/vibe-coders-guide.pdf',
            epub: 'https://github.com/vibecoders/singularity-guide/releases/download/latest/vibe-coders-guide.epub'
        };

        if (downloads[format]) {
            window.open(downloads[format], '_blank');
        } else {
            alert(`${format.toUpperCase()} download will be available soon!`);
        }
    }

    showDownloadModal() {
        // Create modal for download options
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3>Download Options</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-content">
                    <p>Choose your preferred format:</p>
                    <div class="download-options">
                        <a href="#" class="btn btn-primary" onclick="contentLoader.downloadFile('pdf')">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                            Download PDF
                        </a>
                        <a href="#" class="btn btn-secondary" onclick="contentLoader.downloadFile('epub')">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                            </svg>
                            Download EPUB
                        </a>
                        <a href="https://github.com/vibecoders/singularity-guide/archive/main.zip" class="btn btn-outline">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            Download Source (ZIP)
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal handlers
        const closeModal = () => {
            document.body.removeChild(modal);
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    // Handle browser back/forward buttons
    handlePopState(event) {
        if (event.state && event.state.content) {
            this.loadContent(event.state.content);
        } else {
            // Show hero section
            const heroElement = document.getElementById('hero');
            const contentElement = document.getElementById('content');
            
            if (heroElement) heroElement.style.display = 'grid';
            if (contentElement) contentElement.innerHTML = '';
        }
    }

    // Initialize based on URL hash
    initializeFromURL() {
        const hash = window.location.hash.slice(1);
        if (hash && hash !== 'hero') {
            const filename = `${hash}.md`;
            this.loadContent(filename);
        }
    }
}

// Initialize content loader
window.contentLoader = new ContentLoader();

// Handle browser navigation
window.addEventListener('popstate', (event) => {
    window.contentLoader.handlePopState(event);
});

// Initialize from URL on page load
document.addEventListener('DOMContentLoaded', () => {
    window.contentLoader.initializeFromURL();
});