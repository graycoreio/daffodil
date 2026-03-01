import { Injectable } from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiGuardDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionFactory } from './function.factory';
import { DaffApiServiceDocFactory } from './service-doc.factory';

/**
 * Factory for creating DaffApiGuardDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiGuardDocFactory extends DaffModelFactory<DaffApiGuardDoc> {
  constructor(
    private classFactory: DaffApiServiceDocFactory,
    private functionFactory: DaffDocsApiFunctionFactory,
  ) {
    super();
  }

  override create<R extends Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}> = Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}>>(
    partial: Partial<Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}>> & Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}> extends R
      ? Partial<Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}>>
      : R
  ): Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.CLASS}> & R;
  override create<R extends Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}> = Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}>>(
    partial: Partial<Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}>> & Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}> extends R
      ? Partial<Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}>>
      : R
  ): Extract<DaffApiGuardDoc, {docType: DaffDocsApiType.FUNCTION}> & R;
  override create<R extends DaffApiGuardDoc = DaffApiGuardDoc>(
    partial: Partial<DaffApiGuardDoc> & DaffApiGuardDoc extends R
      ? Partial<DaffApiGuardDoc>
      : R,
  ): DaffApiGuardDoc & R;
  override create(partial?: Partial<DaffApiGuardDoc>): DaffApiGuardDoc;
  override create(partial: Partial<DaffApiGuardDoc> = {}): DaffApiGuardDoc {
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
        role: DaffDocsApiRole.GUARD,
      };
    }
    switch (partial.docType) {
      case DaffDocsApiType.CLASS:
        return {
          ...this.classFactory.create(),
          ...partial,
          role: DaffDocsApiRole.GUARD,
          docType: DaffDocsApiType.CLASS,
        };

      case DaffDocsApiType.FUNCTION:
        return {
          ...this.functionFactory.create(partial),
          role: DaffDocsApiRole.GUARD,
          docType: DaffDocsApiType.FUNCTION,
        };

      default:
        throw new TypeError('DaffApiGuardDocFactory requires that partials narrow the union type by specifying `docType` to class or function');
    }
  }
}
