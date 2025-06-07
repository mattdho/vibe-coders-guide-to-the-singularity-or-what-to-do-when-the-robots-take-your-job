/**
 * Markdown Parser
 * Converts markdown content to HTML with syntax highlighting
 */

class MarkdownParser {
    constructor() {
        this.codeBlockCounter = 0;
        this.setupSyntaxHighlighting();
    }

    setupSyntaxHighlighting() {
        // Simple syntax highlighting patterns
        this.syntaxPatterns = {
            keyword: /\b(def|class|if|else|elif|for|while|try|except|import|from|return|yield|async|await|function|const|let|var|true|false|null|undefined)\b/g,
            string: /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
            comment: /(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm,
            number: /\b\d+\.?\d*\b/g,
            operator: /[+\-*/%=<>!&|^~]/g,
            function: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g
        };
    }

    parse(markdown) {
        if (!markdown) return '';

        let html = markdown;

        // Convert headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Convert code blocks
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, language, code) => {
            const highlightedCode = this.highlightSyntax(code.trim(), language);
            const id = `code-block-${++this.codeBlockCounter}`;
            return `
                <div class="code-block" data-language="${language || 'text'}">
                    <div class="code-header">
                        <span class="code-language">${language || 'text'}</span>
                        <button class="copy-button" onclick="copyCode('${id}')" aria-label="Copy code">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                    <pre><code id="${id}">${highlightedCode}</code></pre>
                </div>
            `;
        });

        // Convert inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Convert bold and italic
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

        // Convert blockquotes
        html = html.replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>');

        // Convert lists
        html = this.convertLists(html);

        // Convert line breaks to paragraphs
        html = this.convertParagraphs(html);

        return html;
    }

    highlightSyntax(code, language) {
        if (!code) return '';

        let highlighted = this.escapeHtml(code);

        // Apply syntax highlighting based on language
        if (language === 'python' || language === 'javascript' || language === 'js' || language === 'typescript' || language === 'ts') {
            // Keywords
            highlighted = highlighted.replace(this.syntaxPatterns.keyword, '<span class="keyword">$&</span>');
            
            // Strings
            highlighted = highlighted.replace(this.syntaxPatterns.string, '<span class="string">$&</span>');
            
            // Comments
            highlighted = highlighted.replace(this.syntaxPatterns.comment, '<span class="comment">$&</span>');
            
            // Functions
            highlighted = highlighted.replace(this.syntaxPatterns.function, '<span class="function">$1</span>(');
            
            // Numbers
            highlighted = highlighted.replace(this.syntaxPatterns.number, '<span class="number">$&</span>');
        }

        return highlighted;
    }

    convertLists(html) {
        // Convert unordered lists
        const unorderedListRegex = /^(\s*)-\s+(.*)$/gm;
        let matches = [];
        let match;
        
        while ((match = unorderedListRegex.exec(html)) !== null) {
            matches.push({
                full: match[0],
                indent: match[1].length,
                content: match[2],
                index: match.index
            });
        }

        if (matches.length > 0) {
            let result = html;
            let offset = 0;

            for (let i = 0; i < matches.length; i++) {
                const current = matches[i];
                const isFirst = i === 0 || matches[i - 1].indent < current.indent;
                const isLast = i === matches.length - 1 || matches[i + 1].indent < current.indent;

                let replacement = '';
                if (isFirst) replacement += '<ul>';
                replacement += `<li>${current.content}</li>`;
                if (isLast) replacement += '</ul>';

                const start = current.index + offset;
                const end = start + current.full.length;
                result = result.substring(0, start) + replacement + result.substring(end);
                offset += replacement.length - current.full.length;
            }

            html = result;
        }

        // Convert ordered lists (similar logic)
        const orderedListRegex = /^(\s*)\d+\.\s+(.*)$/gm;
        matches = [];
        
        while ((match = orderedListRegex.exec(html)) !== null) {
            matches.push({
                full: match[0],
                indent: match[1].length,
                content: match[2],
                index: match.index
            });
        }

        if (matches.length > 0) {
            let result = html;
            let offset = 0;

            for (let i = 0; i < matches.length; i++) {
                const current = matches[i];
                const isFirst = i === 0 || matches[i - 1].indent < current.indent;
                const isLast = i === matches.length - 1 || matches[i + 1].indent < current.indent;

                let replacement = '';
                if (isFirst) replacement += '<ol>';
                replacement += `<li>${current.content}</li>`;
                if (isLast) replacement += '</ol>';

                const start = current.index + offset;
                const end = start + current.full.length;
                result = result.substring(0, start) + replacement + result.substring(end);
                offset += replacement.length - current.full.length;
            }

            html = result;
        }

        return html;
    }

    convertParagraphs(html) {
        // Split by double line breaks and wrap in paragraphs
        const paragraphs = html.split(/\n\s*\n/);
        return paragraphs
            .map(p => p.trim())
            .filter(p => p.length > 0)
            .map(p => {
                // Don't wrap if already wrapped in HTML tags
                if (p.startsWith('<') && p.endsWith('>')) {
                    return p;
                }
                return `<p>${p}</p>`;
            })
            .join('\n\n');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    generateTOC(markdown) {
        const headers = [];
        const lines = markdown.split('\n');

        lines.forEach((line, index) => {
            const match = line.match(/^(#{1,6})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const title = match[2].trim();
                const id = this.generateId(title);
                
                headers.push({
                    level,
                    title,
                    id,
                    line: index
                });
            }
        });

        return headers;
    }

    generateId(title) {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    }
}

// Global function for copying code
window.copyCode = function(elementId) {
    const codeElement = document.getElementById(elementId);
    if (!codeElement) return;

    const text = codeElement.textContent;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(elementId);
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyFeedback(elementId);
    }
};

function showCopyFeedback(elementId) {
    const button = document.querySelector(`[onclick="copyCode('${elementId}')"]`);
    if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        `;
        button.style.color = 'var(--accent-primary)';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.color = '';
        }, 2000);
    }
}

// Export for use in other modules
window.MarkdownParser = MarkdownParser;