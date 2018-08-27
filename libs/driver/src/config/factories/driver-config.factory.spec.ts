import { TestBed } from '@angular/core/testing';
import { DaffDriverConfigFactory } from './driver-config.factory';
import { DaffDriverConfig } from '../models/driver-config';

describe('Driver | Config | Factories | DaffDriverConfigFactory', () => {
  let daffodilConfigFactory: DaffDriverConfigFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffDriverConfigFactory]
    });

    daffodilConfigFactory = TestBed.get(DaffDriverConfigFactory);
  });

  it('should be created', () => {
    expect(daffodilConfigFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffDriverConfig;

    beforeEach(() => {
      result = daffodilConfigFactory.create();
    });

    it('should return a DaffodilConfig object with a BASE_URL', () => {
      expect(result.BASE_URL).toEqual('baseUrl/');
    });
  });
});
