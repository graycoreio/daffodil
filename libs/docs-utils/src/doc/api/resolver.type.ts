import { DaffApiDocBase } from './base.type';
import { DaffDocsApiFunction } from './function.type';
import { DaffApiService } from './service.type';
import {
  DaffDocsApiRole,
  DaffDocsApiType,
} from '../../api/public_api';

export type DaffApiResolverDoc = (({docType: DaffDocsApiType.FUNCTION} & DaffDocsApiFunction) | ({docType: DaffDocsApiType.CLASS} & DaffApiService)) & DaffApiDocBase & {
  role: DaffDocsApiRole.RESOLVER;
};
