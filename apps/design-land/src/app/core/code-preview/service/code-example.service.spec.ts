import { TestBed } from '@angular/core/testing';

import { CodeExampleService } from './code-example.service';

describe('CodeExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeExampleService = TestBed.get(CodeExampleService);
    expect(service).toBeTruthy();
  });
});
