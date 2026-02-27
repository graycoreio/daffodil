import { Injectable } from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiHelperDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassFactory } from './class.factory';
import { DaffDocsApiFunctionFactory } from './function.factory';

/**
 * Factory for creating DaffApiHelperDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiHelperDocFactory extends DaffModelFactory<DaffApiHelperDoc> {
  constructor(
    private classFactory: DaffDocsApiClassFactory,
    private functionFactory: DaffDocsApiFunctionFactory,
  ) {
    super();
  }

  override create<R extends Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}> = Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}>>(
    partial: Partial<Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}>> & Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}> extends R
      ? Partial<Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}>>
      : R
  ): Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.CLASS}> & R;
  override create<R extends Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}> = Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}>>(
    partial: Partial<Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}>> & Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}> extends R
      ? Partial<Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}>>
      : R
  ): Extract<DaffApiHelperDoc, {docType: DaffDocsApiType.FUNCTION}> & R;
  override create<R extends DaffApiHelperDoc = DaffApiHelperDoc>(
    partial: Partial<DaffApiHelperDoc> & DaffApiHelperDoc extends R
      ? Partial<DaffApiHelperDoc>
      : R,
  ): DaffApiHelperDoc & R;
  override create<R extends DaffApiHelperDoc = DaffApiHelperDoc>(partial?: Partial<DaffApiHelperDoc>): DaffApiHelperDoc & R;
  override create<R extends DaffApiHelperDoc = DaffApiHelperDoc>(partial: Partial<DaffApiHelperDoc> = {}): DaffApiHelperDoc & R {
    if (!partial) {
      return {
        ...sample([
          {
            ...this.classFactory.create(),
            docType: DaffDocsApiType.CLASS,
          },
          {
            ...this.functionFactory.create(),
            docType: DaffDocsApiType.FUNCTION,
          },
        ]),
        role: DaffDocsApiRole.HELPER,
      };
    }
    switch (partial.docType) {
      case DaffDocsApiType.CLASS:
        return {
          ...this.classFactory.create(partial),
          role: DaffDocsApiRole.HELPER,
          docType: DaffDocsApiType.CLASS,
        };

      case DaffDocsApiType.FUNCTION:
        return {
          ...this.functionFactory.create(partial),
          role: DaffDocsApiRole.HELPER,
          docType: DaffDocsApiType.FUNCTION,
        };

      default:
        throw new TypeError('DaffApiHelperDocFactory requires that partials narrow the union type by specifying `docType`');
    }
  }
}
