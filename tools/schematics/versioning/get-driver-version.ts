import { DaffJsonProject } from './daff-json.type';
import {
  MagentoVersionString,
  parseMagentoVersion,
} from './magento/public_api';
import { DaffVersioningPlatform } from './platform.type';
import {
  parseSemanticVersion,
  SemanticVersionString,
} from './semantic/public_api';
import { DaffVersionString } from './version.type';

type Ret = DaffJsonProject['drivers'];

const validateMagentoVersion = (v: MagentoVersionString | SemanticVersionString): v is MagentoVersionString =>
  !!parseMagentoVersion(v);

const validateSemanticVersion = (v: MagentoVersionString | SemanticVersionString): v is SemanticVersionString =>
  !!parseSemanticVersion(v);

export const getDriverVersion = (platform: DaffVersioningPlatform, version: DaffVersionString): Ret => {
  if ((platform === 'magento' && validateMagentoVersion(version))) {
    return {
      magento: version,
    };
  } else if (platform === 'shopify' && validateSemanticVersion(version)) {
    return {
      shopify: version,
    };
  } else {
    throw new Error(`${version} is not a valid version string for ${platform}`);
  }
};
