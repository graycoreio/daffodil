/**
 * Finds the properties in `T` that are required, that is, not optional.
 * Based on https://stackoverflow.com/a/53899815.
 */
export type RequiredProperties<T> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? K
    : never
}[keyof T], undefined>;
