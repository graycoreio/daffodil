import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';

import { DaffDocsNavList } from '@daffodil/docs-utils';

import { DaffioDocsIndexService } from './index.service';
import { DaffioRoute } from '../../core/router/route.type';

export const daffioDocsIndexResolver: ResolveFn<DaffDocsNavList> = (route: ActivatedRouteSnapshot) =>
  inject(DaffioDocsIndexService).getListForKind((<DaffioRoute['data']>route.data).docKind, (<DaffioRoute['data']>route.data).docPrefix);
