import { TestBed } from '@angular/core/testing';

import {
  DaffApiDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContentFragmentService } from './fragment.service';
import { DaffioDocsApiDynamicContentFragments } from './fragment.type';
import {
  provideDaffioDocsApiDynamicMultiRoleDocTypeFragment,
  provideDaffioDocsApiDynamicMultiRoleFragment,
} from './fragments.token';
import { DAFFIO_DOCS_API_BASE_FRAGMENTS } from '../roles/fragments/base';

describe('DaffioDocsApiDynamicContentFragmentService', () => {
  let service: DaffioDocsApiDynamicContentFragmentService;
  const serviceFragments: DaffioDocsApiDynamicContentFragments = { components: []};
  const classHelperFragments: DaffioDocsApiDynamicContentFragments = { components: []};
  const functionHelperFragments: DaffioDocsApiDynamicContentFragments = { components: []};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioDocsApiDynamicContentFragmentService,
        ...provideDaffioDocsApiDynamicMultiRoleFragment(serviceFragments, DaffDocsApiRole.SERVICE),
        ...provideDaffioDocsApiDynamicMultiRoleDocTypeFragment(classHelperFragments, DaffDocsApiType.CLASS, DaffDocsApiRole.HELPER),
        ...provideDaffioDocsApiDynamicMultiRoleDocTypeFragment(functionHelperFragments, DaffDocsApiType.FUNCTION, DaffDocsApiRole.HELPER),
      ],
    });

    service = TestBed.inject(DaffioDocsApiDynamicContentFragmentService);
  });

  it('should return the fragments registered for the role when none are registered for the doc type', () => {
    const doc = <DaffApiDoc>{
      role: DaffDocsApiRole.SERVICE,
      docType: DaffDocsApiType.CLASS,
    };

    expect(service.get(doc)).toBe(serviceFragments);
  });

  it('should return the fragments registered for the role and doc type of a class helper', () => {
    const doc = <DaffApiDoc>{
      role: DaffDocsApiRole.HELPER,
      docType: DaffDocsApiType.CLASS,
    };

    expect(service.get(doc)).toBe(classHelperFragments);
  });

  it('should return the fragments registered for the role and doc type of a function helper', () => {
    const doc = <DaffApiDoc>{
      role: DaffDocsApiRole.HELPER,
      docType: DaffDocsApiType.FUNCTION,
    };

    expect(service.get(doc)).toBe(functionHelperFragments);
  });

  it('should return the base fragments when nothing is registered for the role', () => {
    const doc = <DaffApiDoc>{
      role: DaffDocsApiRole.TOKEN,
      docType: DaffDocsApiType.CONST,
    };

    expect(service.get(doc)).toBe(DAFFIO_DOCS_API_BASE_FRAGMENTS);
  });
});
