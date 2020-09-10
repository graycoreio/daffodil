import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CodeExampleService } from './code-example.service';

describe('CodeExampleService', () => {
  let service: CodeExampleService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CodeExampleService,
      ]
    });
    service = TestBed.get(CodeExampleService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('and the get method', () => {
    it('should return an unknown example', () => {
      service.get('test').subscribe(resp => {
        expect(resp).toEqual(jasmine.objectContaining({
          name: undefined,
          element: 'undefined-example'
        }));
      })
      const req = httpMock.expectOne('/assets/design-examples/test.json');
      req.flush('test');
      httpMock.verify();
    });
  })
});
