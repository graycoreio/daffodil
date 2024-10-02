import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';

import { DaffioDocsIndexService } from './index.service';
import { DaffioRoute } from '../../core/router/route.type';
import { DaffioDocList } from '../models/doc-list';

export const daffioDocsIndexResolver: ResolveFn<DaffioDocList> = (route: ActivatedRouteSnapshot) =>
  inject(DaffioDocsIndexService).getListForKind((<DaffioRoute['data']>route.data).docKind, (<DaffioRoute['data']>route.data).docPrefix);
