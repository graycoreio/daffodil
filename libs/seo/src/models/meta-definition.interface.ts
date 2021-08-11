/**
 * A set of meta attributes needed for SEO purposes.
 * It can be a name definition or a property definition but not both.
 */
export type DaffSeoMetaDefinition = DaffSeoNameMetaDefinition  | DaffSeoPropertyMetaDefinition;

/**
 * A set of meta name attributes needed for SEO purposes.
 */
export interface DaffSeoNameMetaDefinition extends DaffSeoBaseMetaDefinition {
  name: string;
  property?: never;
}

/**
 * A set of meta property attributes needed for SEO purposes.
 */
export interface DaffSeoPropertyMetaDefinition extends DaffSeoBaseMetaDefinition {
  name?: never;
  property: string;
}

interface DaffSeoBaseMetaDefinition {
  content: string;
  id?: string;
  [prop: string]: string;
}
