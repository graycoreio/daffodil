import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsItem } from '@daffodil/docs-utils';

import {
  DaffDocFactory,
  DaffPackageGuideDocFactory,
} from './doc/public_api';
import {
  DaffApiNavDocFactory,
  DaffApiNavPackageDocFactory,
  DaffApiPackageDocFactory,
  DaffDesignGuideNavDocFactory,
  DaffDocsApiNavListFactory,
  DaffDocsDesignGuideNavListFactory,
  DaffDocsNavListFactory,
} from './nav/public_api';

/**
 * Factory for creating various documentation objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocItemFactory extends DaffModelFactory<DaffDocsItem> {
  constructor(
    private docFactory: DaffDocFactory,
    private packageGuideDoc: DaffPackageGuideDocFactory,
    // private apiDoc: DaffApiDocFactory,
    private apiNavDoc: DaffApiNavDocFactory,
    private apiNavPackageDoc: DaffApiNavPackageDocFactory,
    private designGuideNavDoc: DaffDesignGuideNavDocFactory,
    private docsNavList: DaffDocsNavListFactory,
    private docsDesignGuideNavList: DaffDocsDesignGuideNavListFactory,
    private docsApiNavList: DaffDocsApiNavListFactory,
    private apiPackageDoc: DaffApiPackageDocFactory,
  ) {
    super();
  }

  /**
   * Creates a random doc object.
   */
  override create(partial?: Partial<DaffDocsItem>): DaffDocsItem {
    return {
      ...faker.helpers.arrayElement([
        this.docFactory.create(),
        this.packageGuideDoc.create(),
        // this.apiDoc.create(),
        this.apiNavDoc.create(),
        this.apiNavPackageDoc.create(),
        this.designGuideNavDoc.create(),
        this.docsNavList.create(),
        this.docsDesignGuideNavList.create(),
        this.docsApiNavList.create(),
        this.apiPackageDoc.create(),
      ]),
      ...partial,
    };
  }
}
