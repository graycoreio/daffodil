import { DOCUMENT } from '@angular/common';
import {
  inject,
  Injectable,
} from '@angular/core';

/**
 * Service for injecting style tags into the document head.
 * Useful for dynamically generated styles that need to be cleaned up later.
 * Memoizes styles to avoid duplicate style tags for the same CSS.
 */
@Injectable({ providedIn: 'root' })
export class DaffContentStyleInjector {
  private styleCache = new Map<string, HTMLStyleElement>();
  private document = inject(DOCUMENT);

  /**
   * Injects a style tag into the document head with the provided CSS.
   * Returns the cached style element if the same CSS was already injected.
   *
   * @param css - The CSS string to inject
   * @returns The HTMLStyleElement (either newly created or cached)
   */
  inject(css: string): HTMLStyleElement {
    // Return cached style tag if it exists
    const cached = this.styleCache.get(css);
    if (cached && cached.isConnected) {
      return cached;
    }

    // Create and inject new style tag
    const styleTag = this.document.createElement('style');
    styleTag.textContent = css;
    styleTag.setAttribute('data-schema-styles', 'true');
    this.document.head.appendChild(styleTag);

    // Cache the style tag
    this.styleCache.set(css, styleTag);
    return styleTag;
  }

  /**
   * Removes a specific style tag from the document and cache.
   *
   * @param styleTag - The style element to remove
   */
  destroy(styleTag: HTMLStyleElement): void {
    // Find and remove from cache
    for (const [css, cachedTag] of this.styleCache.entries()) {
      if (cachedTag === styleTag) {
        this.styleCache.delete(css);
        break;
      }
    }

    // Remove from DOM
    if (styleTag.isConnected) {
      styleTag.remove();
    }
  }

  /**
   * Removes all injected style tags from the document and clears the cache.
   */
  destroyAll(): void {
    for (const styleTag of this.styleCache.values()) {
      if (styleTag.isConnected) {
        styleTag.remove();
      }
    }
    this.styleCache.clear();
  }
}
