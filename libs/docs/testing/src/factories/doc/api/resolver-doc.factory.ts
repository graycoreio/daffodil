import { Injectable } from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiResolverDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionFactory } from './function.factory';
import { DaffApiServiceDocFactory } from './service-doc.factory';

/**
 * Factory for creating DaffApiResolverDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiResolverDocFactory extends DaffModelFactory<DaffApiResolverDoc> {
  constructor(
    private classFactory: DaffApiServiceDocFactory,
    private functionFactory: DaffDocsApiFunctionFactory,
  ) {
    super();
  }

  override create<R extends Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}> = Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}>>(
    partial: Partial<Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}>> & Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}> extends R
      ? Partial<Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}>>
      : R
  ): Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.CLASS}> & R;
  override create<R extends Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}> = Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}>>(
    partial: Partial<Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}>> & Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}> extends R
      ? Partial<Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}>>
      : R
  ): Extract<DaffApiResolverDoc, {docType: DaffDocsApiType.FUNCTION}> & R;
  override create<R extends DaffApiResolverDoc = DaffApiResolverDoc>(
    partial: Partial<DaffApiResolverDoc> & DaffApiResolverDoc extends R
      ? Partial<DaffApiResolverDoc>
      : R,
  ): DaffApiResolverDoc & R;
  override create(partial?: Partial<DaffApiResolverDoc>): DaffApiResolverDoc;
  override create(partial: Partial<DaffApiResolverDoc> = {}): DaffApiResolverDoc {
    if (!partial.docType) {
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
        role: DaffDocsApiRole.RESOLVER,
      };
    }
    switch (partial.docType) {
      case DaffDocsApiType.CLASS:
        return {
          ...this.classFactory.create(),
          ...partial,
          role: DaffDocsApiRole.RESOLVER,
          docType: DaffDocsApiType.CLASS,
        };

      case DaffDocsApiType.FUNCTION:
        return {
          ...this.functionFactory.create(partial),
          role: DaffDocsApiRole.RESOLVER,
          docType: DaffDocsApiType.FUNCTION,
        };

      default:
        throw new TypeError('DaffApiResolverDocFactory requires that partials narrow the union type by specifying `docType`');
    }
  }
}
