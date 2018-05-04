import { TestBed, inject } from '@angular/core/testing';

import { DaffodilConfigFactory } from './daffodil-config.factory';
import { DaffodilConfig } from '../model';

describe('Core | Config | DaffodilConfigFactory', () => {
  
  let daffodilConfigFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffodilConfigFactory]
    });

    daffodilConfigFactory = TestBed.get(DaffodilConfigFactory);
  });

  it('should be created', () => {
    expect(daffodilConfigFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffodilConfig;

    beforeEach(() => {
      result = daffodilConfigFactory.create();
    });
    
    it('should return a DaffodilConfig object with a BASE_URL', () => {

      expect(result.BASE_URL).toEqual('baseUrl/');
    });
  });
});
