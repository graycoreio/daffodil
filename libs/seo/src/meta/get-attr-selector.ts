import { DaffSeoMetaDefinition } from '../models/public_api';

export function getAttrSelector(def: DaffSeoMetaDefinition): string {
  return def.name
    ? `name="${def.name}"`
    : `property="${def.property}"`;
}
