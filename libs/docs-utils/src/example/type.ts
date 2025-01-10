/**
 * A usage example.
 */
export interface DaffDocExample {
  /**
   * The ID of the example.
   * Since not all examples will have captions, a unique is useful for fragment anchor scrolling.
   */
  id: string;
  /**
   * The short caption describing the example.
   * This should be just plain text.
   */
  caption: string;
  /**
   * The body of the example.
   * Can be HTML and should be rendered as such.
   */
  body: string;
}
