// from https://github.com/sindresorhus/type-fest/blob/main/source/package-json.d.ts
/**
 * A mapping of conditions and the paths to which they resolve.
 */
interface ExportConditions {
  [condition: string]: Exports;
}

/**
 * Entry points of a module, optionally with conditions and subpath exports.
 */
type Exports =
  | null
  | string
  | Array<string | ExportConditions>
  | ExportConditions;

/**
 * The subset of `package.json` fields used to discover auto versioned drivers.
 */
export interface PackageJson {
  name: string;
  exports: Exports;
}
