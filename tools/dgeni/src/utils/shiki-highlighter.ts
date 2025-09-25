import {
  createHighlighter,
  type Highlighter,
  type LanguageInput,
  type ThemeInput,
} from 'shiki';

// Shiki configuration for documentation generation
/**
 * Supported languages for syntax highlighting.
 * Maps language aliases to their canonical names in Shiki.
 */
const LANGUAGE_MAP: Record<string, string> = {
  'typescript': 'typescript',
  'ts': 'typescript',
  'xml': 'xml',
  'html': 'xml',
  'scss': 'scss',
  'css': 'css',
  'sass': 'sass',
  'bash': 'bash',
  'sh': 'bash',
  'shell': 'bash',
  'graphql': 'graphql',
  'gql': 'graphql',
  'javascript': 'javascript',
  'js': 'javascript',
  'json': 'json',
  'plaintext': 'plaintext',
  'text': 'plaintext',
};

/**
 * Default supported languages for the highlighter.
 */
const DEFAULT_LANGUAGES: LanguageInput[] = [
  'typescript' as unknown as LanguageInput,
  'javascript' as unknown as LanguageInput,
  'xml' as unknown as LanguageInput,
  'scss' as unknown as LanguageInput,
  'css' as unknown as LanguageInput,
  'sass' as unknown as LanguageInput,
  'bash' as unknown as LanguageInput,
  'graphql' as unknown as LanguageInput,
  'json' as unknown as LanguageInput,
  'plaintext' as unknown as LanguageInput,
];

/**
 * Default theme configuration.
 * Using VS Code Dark+ theme for better accuracy and consistency.
 */
const DEFAULT_THEME: ThemeInput = 'dark-plus' as ThemeInput;

/**
 * Singleton highlighter instance to avoid recreating the highlighter
 * multiple times during build process.
 */
let highlighterInstance: Highlighter | null = null;

/**
 * Creates and configures a Shiki highlighter instance.
 * Uses VS Code's TextMate grammars and themes for high-fidelity syntax highlighting.
 *
 * @param languages - Additional languages to load beyond the defaults
 * @param theme - Theme to use for highlighting (defaults to VS Code Dark+)
 * @returns Promise that resolves to configured Shiki highlighter
 */
export async function createShikiHighlighter(
  languages: LanguageInput[] = [],
  theme: ThemeInput = DEFAULT_THEME,
): Promise<Highlighter> {
  if (highlighterInstance) {
    return highlighterInstance;
  }

  const allLanguages = Array.from(new Set([...DEFAULT_LANGUAGES, ...languages]));

  highlighterInstance = await createHighlighter({
    themes: [theme],
    langs: allLanguages,
  });

  return highlighterInstance;
}

/**
 * Highlights code using Shiki with VS Code-like accuracy.
 *
 * @param code - The code string to highlight
 * @param language - The language identifier for syntax highlighting
 * @param theme - Optional theme override
 * @returns HTML string with syntax highlighting
 */
export async function highlightCode(
  code: string,
  language: string,
  theme: ThemeInput = DEFAULT_THEME,
): Promise<string> {
  const highlighter = await createShikiHighlighter([], theme);

  // Normalize language name using our mapping
  const normalizedLang = LANGUAGE_MAP[language] || 'plaintext';

  // Ensure the language is loaded
  const loadedLanguages = highlighter.getLoadedLanguages();
  if (!loadedLanguages.includes(normalizedLang as any)) {
    try {
      await highlighter.loadLanguage(normalizedLang as unknown as LanguageInput);
    } catch (error) {
      // Fallback to plaintext if language loading fails
      console.warn(`Failed to load language '${normalizedLang}', falling back to plaintext:`, error);
      return highlighter.codeToHtml(code, {
        lang: 'plaintext',
        theme: theme as any,
      });
    }
  }

  return highlighter.codeToHtml(code, {
    lang: normalizedLang as any,
    theme: theme as any,
  });
}

/**
 * Gets the raw highlighted tokens without HTML wrapper.
 * Useful for custom rendering or further processing.
 *
 * @param code - The code string to highlight
 * @param language - The language identifier for syntax highlighting
 * @param theme - Optional theme override
 * @returns Promise that resolves to highlighted HTML content (without wrapper)
 */
export async function highlightCodeInline(
  code: string,
  language: string,
  theme: ThemeInput = DEFAULT_THEME,
): Promise<string> {
  const fullHtml = await highlightCode(code, language, theme);

  // Extract the content inside the <pre> tag, removing the outer wrapper
  const match = fullHtml.match(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/);
  return match ? match[1] : fullHtml;
}

/**
 * Utility function to get the normalized language name.
 * Useful for checking language support or debugging.
 *
 * @param language - The input language identifier
 * @returns The normalized language name that Shiki will use
 */
export function getNormalizedLanguage(language: string): string {
  return LANGUAGE_MAP[language] || 'plaintext';
}

/**
 * Cache for synchronous access to highlighting results.
 * This allows synchronous use cases while maintaining async initialization.
 */
const highlightCache = new Map<string, string>();

/**
 * Synchronous version of highlightCodeInline.
 * This will only work if the highlighter has been initialized and the code has been cached.
 * Used for compatibility with existing synchronous processors.
 *
 * @param code - The code string to highlight
 * @param language - The language identifier for syntax highlighting
 * @returns HTML string with syntax highlighting, or empty string if not cached
 */
export function highlightCodeSync(code: string, language: string): string {
  const cacheKey = `${language}:${code}`;
  return highlightCache.get(cacheKey) || '';
}

/**
 * Pre-caches highlighting results for synchronous access later.
 * This should be called during async initialization phase.
 *
 * @param code - The code string to highlight
 * @param language - The language identifier for syntax highlighting
 * @param theme - Optional theme override
 */
export async function precacheHighlight(
  code: string,
  language: string,
  theme: ThemeInput = DEFAULT_THEME,
): Promise<void> {
  const cacheKey = `${language}:${code}`;
  if (!highlightCache.has(cacheKey)) {
    try {
      const result = await highlightCodeInline(code, language, theme);
      highlightCache.set(cacheKey, result);
    } catch (error) {
      // Set empty string for failed highlights to avoid repeated attempts
      highlightCache.set(cacheKey, '');
    }
  }
}

/**
 * Dispose of the highlighter instance and clear the cache.
 * Should be called when the build process is complete to free memory.
 */
export function disposeHighlighter(): void {
  if (highlighterInstance) {
    highlighterInstance.dispose?.();
    highlighterInstance = null;
  }
  highlightCache.clear();
}