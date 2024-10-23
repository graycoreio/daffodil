import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { DaffioDocsDesignIndexService } from './index.service';
import { DaffioDocList } from '../../models/doc-list';

export const daffioDocsDesignIndexResolver: ResolveFn<DaffioDocList> = () =>
  inject(DaffioDocsDesignIndexService).getList();
