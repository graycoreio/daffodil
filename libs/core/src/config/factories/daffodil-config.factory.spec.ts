import { TestBed } from '@angular/core/testing';

import { DaffodilConfig } from '../models/model';
import { DaffodilConfigFactory } from './daffodil-config.factory';

describe('Core | Config | Factories | DaffodilConfigFactory', () => {
  
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
