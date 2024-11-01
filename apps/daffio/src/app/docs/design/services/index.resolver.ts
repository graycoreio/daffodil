import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';

import { DaffioDocsDesignIndexService } from './index.service';

export const daffioDocsDesignIndexResolver: ResolveFn<DaffDocsDesignGuideNavList> = () =>
  inject(DaffioDocsDesignIndexService).getList();
