/**
 * Navigation
 * Handles table of contents generation and navigation
 */

class Navigation {
    constructor() {
        this.tocData = this.generateTOCData();
        this.currentSection = null;
        this.setupEventListeners();
        this.generateTOC();
        this.setupScrollSpy();
    }

    generateTOCData() {
        return [
            {
                title: "Introduction",
                file: "00-introduction.md",
                id: "introduction"
            },
            {
                title: "Part I: The Collapse of the Old Work World",
                sections: [
                    {
                        title: "Chapter 1: Bullshit Jobs in the Age of Automation",
                        file: "01-bullshit-jobs-age-of-automation.md",
                        id: "chapter-1"
                    },
                    {
                        title: "Chapter 2: Prompt or Be Prompted",
                        file: "02-prompt-or-be-prompted.md",
                        id: "chapter-2"
                    },
                    {
                        title: "Chapter 3: The Myth of AI-Proof Jobs",
                        file: "03-myth-of-ai-proof-jobs.md",
                        id: "chapter-3"
                    },
                    {
                        title: "Chapter 4: Resumes Are for Cowards",
                        file: "04-resumes-are-for-cowards.md",
                        id: "chapter-4"
                    }
                ]
            },
            {
                title: "Part II: How to Survive (and Thrive)",
                sections: [
                    {
                        title: "Chapter 5: Automate Yourself Before They Do",
                        file: "05-automate-yourself-before-they-do.md",
                        id: "chapter-5"
                    },
                    {
                        title: "Chapter 6: Side Hustles Are Structural",
                        file: "06-side-hustles-are-structural.md",
                        id: "chapter-6"
                    },
                    {
                        title: "Chapter 7: How to Freelance Like an Anarchist",
                        file: "07-freelance-like-anarchist.md",
                        id: "chapter-7"
                    },
                    {
                        title: "Chapter 8: The AI Co-Pilot Isn't Your Friend",
                        file: "08-ai-copilot-isnt-your-friend.md",
                        id: "chapter-8"
                    }
                ]
            },
            {
                title: "Part III: Reclaiming the Future",
                sections: [
                    {
                        title: "Chapter 9: Build Publicly, Share Loudly",
                        file: "09-build-publicly-share-loudly.md",
                        id: "chapter-9"
                    },
                    {
                        title: "Chapter 10: Networked Work, Decentralized Survival",
                        file: "10-networked-work-decentralized-survival.md",
                        id: "chapter-10"
                    },
                    {
                        title: "Chapter 11: The End of Work Is Not the End of You",
                        file: "11-The-End-of-Work-Is-Not-the-End-of-You.md",
                        id: "chapter-11"
                    },
                    {
                        title: "Chapter 12: Fully Automated Vibe Collectivism",
                        file: "12-fully-automated-vibe-collectivism.md",
                        id: "chapter-12"
                    }
                ]
            },
            {
                title: "Outro",
                file: "outro.md",
                id: "outro"
            },
            {
                title: "Appendices",
                sections: [
                    {
                        title: "Appendix A: Tools to Learn Right Now",
                        file: "appendix-a-tools.md",
                        id: "appendix-a"
                    },
                    {
                        title: "Appendix B: Claude/GPT Prompt Library",
                        file: "appendix-b-prompts.md",
                        id: "appendix-b"
                    },
                    {
                        title: "Appendix C: Jobs That Will Still Suck in 2040",
                        file: "appendix-c-jobs-that-suck.md",
                        id: "appendix-c"
                    }
                ]
            },
            {
                title: "Bibliography",
                file: "bibliography.md",
                id: "bibliography"
            }
        ];
    }

    setupEventListeners() {
        // Menu toggle for mobile
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                menuToggle.classList.toggle('active');
                
                // Update main content margin
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.classList.toggle('sidebar-hidden');
                }
            });
        }

        // TOC collapse toggle
        const tocCollapse = document.getElementById('toc-collapse');
        if (tocCollapse) {
            tocCollapse.addEventListener('click', () => {
                this.toggleTOCCollapse();
            });
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                const menuToggle = document.getElementById('menu-toggle');
                
                if (sidebar && menuToggle && 
                    !sidebar.contains(e.target) && 
                    !menuToggle.contains(e.target) &&
                    sidebar.classList.contains('open')) {
                    
                    sidebar.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    generateTOC() {
        const tocElement = document.getElementById('toc');
        if (!tocElement) return;

        let tocHTML = '';

        this.tocData.forEach(item => {
            if (item.sections) {
                // Part with sections
                tocHTML += `
                    <div class="toc-section">
                        <div class="toc-section-title">${item.title}</div>
                        <ul>
                `;
                
                item.sections.forEach(section => {
                    tocHTML += `
                        <li>
                            <a href="#${section.id}" data-file="${section.file}" class="toc-link">
                                ${section.title}
                            </a>
                        </li>
                    `;
                });
                
                tocHTML += `
                        </ul>
                    </div>
                `;
            } else {
                // Single item
                tocHTML += `
                    <div class="toc-section">
                        <ul>
                            <li>
                                <a href="#${item.id}" data-file="${item.file}" class="toc-link">
                                    ${item.title}
                                </a>
                            </li>
                        </ul>
                    </div>
                `;
            }
        });

        tocElement.innerHTML = tocHTML;

        // Add click handlers to TOC links
        const tocLinks = tocElement.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const file = link.dataset.file;
                if (file && window.contentLoader) {
                    window.contentLoader.loadContent(file);
                }
                
                // Close mobile menu
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });
    }

    toggleTOCCollapse() {
        const tocCollapse = document.getElementById('toc-collapse');
        const tocSections = document.querySelectorAll('.toc-section ul');
        
        if (tocCollapse) {
            const isCollapsed = tocCollapse.classList.contains('collapsed');
            
            if (isCollapsed) {
                // Expand all
                tocCollapse.classList.remove('collapsed');
                tocSections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                // Collapse all
                tocCollapse.classList.add('collapsed');
                tocSections.forEach(section => {
                    section.style.display = 'none';
                });
            }
        }
    }

    setupScrollSpy() {
        // Update progress bar and active navigation based on scroll
        let ticking = false;

        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        });

        // Intersection Observer for section highlighting
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.updateActiveSection(entry.target.id);
                    }
                });
            }, observerOptions);

            // Observe headers when content is loaded
            const observeHeaders = () => {
                const headers = document.querySelectorAll('#content h1, #content h2, #content h3');
                headers.forEach(header => observer.observe(header));
            };

            // Set up mutation observer to watch for content changes
            const contentObserver = new MutationObserver(() => {
                observeHeaders();
            });

            const contentElement = document.getElementById('content');
            if (contentElement) {
                contentObserver.observe(contentElement, { childList: true, subtree: true });
            }
        }
    }

    updateActiveSection(sectionId) {
        if (this.currentSection === sectionId) return;
        
        this.currentSection = sectionId;
        
        // Update TOC active states
        const tocLinks = document.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Find and activate the corresponding TOC link
        const activeLink = document.querySelector(`.toc-link[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menu-toggle');
        const mainContent = document.getElementById('main-content');
        
        if (sidebar) sidebar.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('active');
        if (mainContent) mainContent.classList.remove('sidebar-hidden');
    }

    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    // Public method to get current navigation state
    getCurrentSection() {
        return this.currentSection;
    }

    // Public method to navigate to a specific section
    navigateToSection(sectionId) {
        const tocLink = document.querySelector(`.toc-link[href="#${sectionId}"]`);
        if (tocLink) {
            tocLink.click();
        }
    }
}

// Initialize navigation
window.navigation = new Navigation();

// Export for use in other modules
window.Navigation = Navigation;