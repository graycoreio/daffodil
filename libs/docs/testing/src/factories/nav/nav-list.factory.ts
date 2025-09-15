import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffDocsNavList,
  DaffDocsDesignGuideNavList,
  DaffDocsApiNavList,
} from '@daffodil/docs-utils';

import { DaffApiNavDocFactory } from './api-nav-doc.factory';
import { DaffApiNavPackageDocFactory } from './api-nav-package-doc.factory';
import { DaffDesignGuideNavDocFactory } from './design-guide-nav-doc.factory';
import { DaffNavDocFactory } from './nav-doc.factory';

/**
 * A factory for creating a {@link DaffDocsNavList}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsNavListFactory {
  constructor(
    private navDocFactory: DaffNavDocFactory,
  ) {}

  create(partial: Partial<DaffDocsNavList> = {}): DaffDocsNavList {
    const baseDoc = this.navDocFactory.create();
    return {
      ...baseDoc,
      children: this._createChildren(faker.number.int({ min: 0, max: 4 })),
      ...partial,
    };
  }

  createMany(qty = 1, partial: Partial<DaffDocsNavList> = {}): DaffDocsNavList[] {
    return Array.from({ length: qty }, () => this.create(partial));
  }

  private _createChildren(depth: number): DaffDocsNavList[] {
    if (depth <= 0) {
      return [];
    }

    const childCount = faker.number.int({ min: 1, max: 3 });
    return Array.from({ length: childCount }, () => {
      const child = this.navDocFactory.create();
      return {
        ...child,
        children: this._createChildren(depth - 1),
      };
    });
  }
}

/**
 * A factory for creating a {@link DaffDocsDesignGuideNavList}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsDesignGuideNavListFactory {
  constructor(
    private designGuideNavDocFactory: DaffDesignGuideNavDocFactory,
  ) {}

  create(partial: Partial<DaffDocsDesignGuideNavList> = {}): DaffDocsDesignGuideNavList {
    const baseDoc = this.designGuideNavDocFactory.create();
    return {
      ...baseDoc,
      children: this._createChildren(faker.number.int({ min: 0, max: 3 })),
      ...partial,
    };
  }

  createMany(qty = 1, partial: Partial<DaffDocsDesignGuideNavList> = {}): DaffDocsDesignGuideNavList[] {
    return Array.from({ length: qty }, () => this.create(partial));
  }

  private _createChildren(depth: number): DaffDocsDesignGuideNavList[] {
    if (depth <= 0) {
      return [];
    }

    const childCount = faker.number.int({ min: 1, max: 4 });
    return Array.from({ length: childCount }, () => {
      const child = this.designGuideNavDocFactory.create();
      return {
        ...child,
        children: this._createChildren(depth - 1),
      };
    });
  }
}

/**
 * A factory for creating a {@link DaffDocsApiNavList}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiNavListFactory {
  constructor(
    private apiNavDocFactory: DaffApiNavDocFactory,
    private apiNavPackageDocFactory: DaffApiNavPackageDocFactory,
  ) {}

  create(partial: Partial<DaffDocsApiNavList> = {}): DaffDocsApiNavList {
    const usePackageDoc = faker.datatype.boolean({ probability: 0.3 });
    const baseDoc = usePackageDoc
      ? this.apiNavPackageDocFactory.create()
      : this.apiNavDocFactory.create();

    return {
      ...baseDoc,
      children: this._createChildren(faker.number.int({ min: 0, max: 3 })),
      ...partial,
    };
  }

  createMany(qty = 1, partial: Partial<DaffDocsApiNavList> = {}): DaffDocsApiNavList[] {
    return Array.from({ length: qty }, () => this.create(partial));
  }

  private _createChildren(depth: number): DaffDocsApiNavList[] {
    if (depth <= 0) {
      return [];
    }

    const childCount = faker.number.int({ min: 1, max: 5 });
    return Array.from({ length: childCount }, () => {
      const usePackageDoc = faker.datatype.boolean({ probability: 0.2 });
      const child = usePackageDoc
        ? this.apiNavPackageDocFactory.create()
        : this.apiNavDocFactory.create();

      return {
        ...child,
        children: this._createChildren(depth - 1),
      };
    });
  }
}
