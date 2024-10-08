import { STATUS } from 'angular-in-memory-web-api';

import {
  DaffInMemoryBackendInterface,
  DaffInMemoryDataServiceInterface,
} from '@daffodil/driver/in-memory';

import { DaffInMemoryBackendDelegate } from './delegate.class';

describe('@daffodil/driver/in-memory | DaffInMemoryRootBackend', () => {
  let service: DaffInMemoryBackendDelegate;
  let backends: Array<jasmine.SpyObj<DaffInMemoryBackendInterface>>;
  let methods: Array<keyof DaffInMemoryDataServiceInterface>;

  beforeEach(() => {
    methods = ['get', 'put', 'post', 'delete'];
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
    service = new DaffInMemoryBackendDelegate(backends);
  });

  // eslint-disable-next-line guard-for-in
  for (const method in methods) {
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
        };
        service[method](reqInfo).subscribe((res) => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });

      it('should return a "not found" if there isn\'t a backend for the collection name', (done) => {
        const reqInfo: any = {
          collectionName: '404backendnotfound',
        };
        service[method](reqInfo).subscribe((res) => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });
    });
  }
});
