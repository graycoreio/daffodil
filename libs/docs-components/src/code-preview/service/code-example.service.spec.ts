import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffDocsComponentExamples } from '@daffodil/documentation';

import {
  DaffDocsCodeExampleService,
  provideDaffDocsLocation,
} from './code-example.service';

describe('@daffodil/docs-components | DaffDocsCodeExampleService', () => {
  let service: DaffDocsCodeExampleService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffDocsCodeExampleService,
        DaffDocsComponentExamples,
        provideDaffDocsLocation('/assets/'),
      ],
    });
    service = TestBed.inject(DaffDocsCodeExampleService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('and the get method', () => {
    it('should return an unknown example', () => {
      service.get('test').subscribe(resp => {
        expect(resp).toEqual(jasmine.objectContaining({
          name: undefined,
          component: undefined,
        }));
      });
      const req = httpMock.expectOne('/assets/design-examples/test.json');
      req.flush('test');
      httpMock.verify();
    });
  });
});
