import { DaffApiDocBase } from '@daffodil/docs-utils';

import { DaffioDocsDynamicContent } from '../../dynamic-content/dynamic-content.type';

export type DaffioDocsApiDynamicContent<T extends DaffApiDocBase = DaffApiDocBase> = DaffioDocsDynamicContent<T>;
