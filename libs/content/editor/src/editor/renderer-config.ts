/**
 * Renderer communication mode.
 *
 * - `csr`: Client-side rendering. Uses postMessage API for dynamic schema updates (supports inline editing)
 * - `ssr`: Server-side rendering. POSTs schema via hidden form, reloads on changes (preview only)
 */
export type DaffEditorRendererMode = 'csr' | 'ssr';

/**
 * Configuration for the iframe-based renderer.
 *
 * When provided to the editor, it will use an iframe for rendering
 * instead of the inline EditableRenderer. This enables CSS isolation and
 * allows for pluggable renderers (Angular, PHP, etc.).
 */
export interface DaffEditorRendererConfig {
  /**
   * URL for the iframe-based renderer.
   */
  url: string;

  /**
   * Communication mode for the renderer.
   *
   * - `csr`: Client-side rendering. Dynamic updates via postMessage, supports inline editing
   * - `ssr`: Server-side rendering. Schema POSTed via form, page reloads on changes, preview only
   *
   * @default 'csr'
   */
  mode?: DaffEditorRendererMode;

  /**
   * Additional form fields to include in the SSR form POST.
   *
   * These are added as hidden inputs alongside the schema field.
   * Useful for passing tokens like Magento's `form_key` for CSRF protection.
   *
   * @example
   * ```typescript
   * formFields: {
   *   form_key: 'abc123...'
   * }
   * ```
   */
  formFields?: Record<string, string>;
}
