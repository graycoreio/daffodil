import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';

import { DaffioDocsDesignIndexService } from '../services/index.service';

export const daffioDocsDesignComponentListResolverFactory: (section: string) => ResolveFn<DaffDocsDesignGuideNavList> = (section: string) => () =>
  inject(DaffioDocsDesignIndexService).getList().pipe(
    map((docsList) =>
      docsList
        .children
        .find(({ id }) => id === section)
        .children
        .filter(({ id }) => !!id)
        .flatMap((d) => d.children.length ? d.children : d),
    ),
  );
