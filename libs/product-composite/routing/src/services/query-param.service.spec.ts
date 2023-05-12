import { TestBed } from '@angular/core/testing';

import { DaffProductCompositeQueryParamService } from './query-param.service';

describe('@daffodil/product-composite/routing | DaffProductCompositeQueryParamService', () => {
  let service: DaffProductCompositeQueryParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        DaffProductCompositeQueryParamService,
      ],
    });

    service = TestBed.inject(DaffProductCompositeQueryParamService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
