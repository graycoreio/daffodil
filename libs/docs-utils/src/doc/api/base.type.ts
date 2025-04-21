import {
  DaffDocsApiRole,
  DaffDocsApiType,
} from '../../api/public_api';
import { DaffDocExample } from '../../example/public_api';
import { DaffDocsRenderedContent } from '../rendered-content.type';
import { DaffDoc } from '../type';

/**
 * An API doc that includes the type of the symbol.
 */
export interface DaffApiDocBase extends DaffDoc {
  docType: DaffDocsApiType;
  role: DaffDocsApiRole;
  examples: Array<DaffDocExample>;
  description: DaffDocsRenderedContent;
  importExample: DaffDocsRenderedContent;
  sourceApiBlock: DaffDocsRenderedContent;
  slug: string;
  name: string;
}
