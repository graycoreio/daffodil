import { STATUS } from 'angular-in-memory-web-api';
import { of } from 'rxjs';

import {
  DaffInMemoryBackendInterface,
  DaffInMemoryDataServiceInterface,
  DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT,
} from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendDelegate } from './delegate.class';

describe('@daffodil/driver/in-memory | DaffInMemoryBackendDelegate', () => {
  let service: DaffInMemoryBackendDelegate;
  let backends: Array<jasmine.SpyObj<DaffInMemoryBackendInterface>>;
  const methods: Array<keyof DaffInMemoryDataServiceInterface> = ['get', 'put', 'post', 'delete'];

  beforeEach(() => {
    backends = [
      jasmine.createSpyObj('a', methods, {
        collectionName: 'a',
      }),
      jasmine.createSpyObj('b', methods, {
        collectionName: 'b',
      }),
      jasmine.createSpyObj('c', [], {
        collectionName: 'c',
      }),
    ];
    service = new DaffInMemoryBackendDelegate(backends, DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT);
  });

  for (const method of methods) {
    describe(method, () => {
      it('should delegate requests to the correct backend', () => {
        const reqInfo: any = {
          collectionName: 'a',
        };
        service[method](reqInfo);
        expect(backends[0][method]).toHaveBeenCalledWith(reqInfo);
        reqInfo.collectionName = 'b';
        service[method](reqInfo);
        expect(backends[1][method]).toHaveBeenCalledWith(reqInfo);
      });

      it('should return a "not found" if the method is missing from the backend', (done) => {
        const reqInfo: any = {
          collectionName: 'c',
          utils: {
            createResponse$: (resOptionsFactory) => of(resOptionsFactory()),
          },
        };
        service[method](reqInfo).subscribe((res) => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });

      it('should return a "not found" if there isn\'t a backend for the collection name', (done) => {
        const reqInfo: any = {
          collectionName: '404backendnotfound',
          utils: {
            createResponse$: (resOptionsFactory) => of(resOptionsFactory()),
          },
        };
        service[method](reqInfo).subscribe((res) => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });
    });
  }
});
