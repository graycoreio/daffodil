/**
 * Represents the structure of an external script that can be loaded into a document.
 *
 * @example Using DaffExternalScript interface to define an external script object
 * ```ts
 * const externalScript: DaffExternalScript = {
 *  src: 'https://example.com/script.js',
 *  async: true,
 *  defer: false,
 *  'data-custom-attribute': 'value',
 * };
 * ```
 */
export interface DaffExternalScript {
  /** The source URL of the script. */
  src: string;

  /**
   * Optional. Indicates whether the script should be loaded asynchronously.
   * @default false
   */
  async?: boolean;

  /**
   * Optional. Indicates whether the script should be deferred in loading.
   * @default false
   */
  defer?: boolean;

  /**
   * Optional. Custom attributes for the script.
   * The keys must start with 'data-' followed by any string.
   */
  [key: `data-${string}`]: string;
}
