/**
 * Describes an SEO service that can manage SEO data on a page.
 * Due to the differences in routing behavior in SSR and client-rendered environments
 * multiple caches are needed to ensure that the service both only affects Daffodil
 * managed SEO data and can restore said data to the page in the event of navigation failure.
 */
export interface DaffSeoRestoreableServiceInterface<T, V = unknown> {
  /**
   * Stores the upserted SEO data since the last clear.
   * This represents the SEO data managed by the service.
   */
  readonly upsertCache: V;
  /**
   * Stores the SEO data present on the current document when it is removed by `clear`.
   * SEO data in this cache can be upserted back into the document with `restore`.
   */
  readonly restoreCache: V;

  /**
   * Adds the SEO info to the page.
   * Adds the info to the upsert cache.
   *
   * @param info
   */
  upsert(info: T): void;

  /**
   * Removes all of the added SEO info from the page.
   * Only removes what was previously added by this service,
   * that is, what is in the upsert cache.
   *
   * The SEO data that was removed is then moved to the restore cache.
   */
  clear(): void;

  /**
   * Restores the previously cleared SEO info to the page.
   */
  restore(): void;

  /**
   * Empties the restore cache.
   * Does not affect upsert cache.
   */
  emptyRestoreCache(): void;
}
