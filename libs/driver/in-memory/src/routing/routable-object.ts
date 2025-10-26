/**
 * Represents a routable object with a URL and type identifier.
 * Used by in-memory drivers to enable automatic URL resolution
 * of in-memory objects. See {@link DaffExternalRouterInMemoryDriver}
 */
export interface DaffInMemoryRoutableObject {
  /**
   * The URL path for this routable object (e.g., "/product-123").
   */
  url: string;

  /**
   * The type identifier for this routable object (e.g., "PRODUCTS", "NAVIGATION").
   */
  type: string;
}

/**
 * A map of URL paths to their corresponding routable objects.
 * The key is the URL path.
 */
export type DaffInMemoryRoutableObjects = Map<string, DaffInMemoryRoutableObject>;
