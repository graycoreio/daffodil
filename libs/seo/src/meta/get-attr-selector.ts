import { DaffSeoMetaDefinition } from '../models/public_api';

/**
 * Gets the attribute selector for a meta definition.
 * The attribute selector uniquely identifies a meta tag,
 * either by its name or property attribute.
 */
export function getAttrSelector(def: DaffSeoMetaDefinition): string {
  return def.name
    ? `name="${def.name}"`
    : `property="${def.property}"`;
}
