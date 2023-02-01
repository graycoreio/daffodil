import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { DaffCustomerAddressInMemoryBackendService } from './address.service';

describe('@daffodil/customer/driver/in-memory | DaffCustomerAddressInMemoryBackendService', () => {
  let service: DaffCustomerAddressInMemoryBackendService;
  let addressFactory: DaffCustomerAddressFactory;
  let mockAddress: DaffCustomerAddress;
  let reqInfoStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerAddressInMemoryBackendService,
      ],
    });

    addressFactory = TestBed.inject(DaffCustomerAddressFactory);
    service = TestBed.inject(DaffCustomerAddressInMemoryBackendService);

    mockAddress = addressFactory.create();
    reqInfoStub = {
      utils: {
        createResponse$: (func) => of(func()),
        getJsonBody: (req) => req.body,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let result: Observable<any>;

    describe('when id is provided', () => {
      beforeEach(() => {
        reqInfoStub = {
          ...reqInfoStub,
          id: mockAddress.id,
        };
        result = service.get(reqInfoStub);
      });

      describe('and when the address exists', () => {
        beforeEach(() => {
          service.addresses[mockAddress.id] = mockAddress;
          result = service.get(reqInfoStub);
        });

        it('should return the address', done => {
          result.subscribe(res => {
            expect(res.body).toEqual(mockAddress);
            expect(res.status).toEqual(STATUS.OK);
            done();
          });
        });
      });

      describe('and when the address does not exist', () => {
        it('should return not found', done => {
          result.subscribe(res => {
            expect(res.status).toEqual(STATUS.NOT_FOUND);
            done();
          });
        });
      });
    });

    describe('when id is not provided', () => {
      beforeEach(() => {
        service.addresses[mockAddress.id] = mockAddress;
        result = service.get(reqInfoStub);
      });

      it('should return the addresses', done => {
        result.subscribe(res => {
          expect(res.body).toEqual([mockAddress]);
          expect(res.status).toEqual(STATUS.OK);
          done();
        });
      });
    });
  });

  describe('put', () => {
    let result: Observable<any>;

    beforeEach(() => {
      result = service.put(reqInfoStub);
    });

    describe('when the address exists', () => {
      let street: string;

      beforeEach(() => {
        street = `updated ${mockAddress.street}`;
        service.addresses[mockAddress.id] = mockAddress;
        reqInfoStub = {
          ...reqInfoStub,
          id: mockAddress.id,
          req: {
            body: {
              street,
            },
          },
        };
        result = service.put(reqInfoStub);
      });

      it('should update the address and return the collection', done => {
        result.subscribe(res => {
          expect(res.body).toContain(jasmine.objectContaining({ street }));
          expect(res.status).toEqual(STATUS.OK);
          expect(service.addresses[mockAddress.id].street).toEqual(street);
          done();
        });
      });
    });

    describe('when the address does not exist', () => {
      it('should return not found', done => {
        result.subscribe(res => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });
    });
  });

  describe('post', () => {
    let result: Observable<any>;

    beforeEach(() => {
      reqInfoStub = {
        ...reqInfoStub,
        req: {
          body: mockAddress,
        },
      };
      result = service.post(reqInfoStub);
    });

    it('should add the address and return the collection', done => {
      result.subscribe(res => {
        expect(res.body).toContain(mockAddress);
        expect(Object.values(service.addresses)).toContain(mockAddress);
        expect(res.status).toEqual(STATUS.OK);
        done();
      });
    });
  });

  describe('delete', () => {
    let result: Observable<any>;

    beforeEach(() => {
      reqInfoStub = {
        ...reqInfoStub,
        id: mockAddress.id,
      };
      result = service.delete(reqInfoStub);
    });

    describe('when the address exists', () => {
      beforeEach(() => {
        service.addresses[mockAddress.id] = mockAddress;
        result = service.delete(reqInfoStub);
      });

      it('should delete the address and return the collection', done => {
        result.subscribe(res => {
          expect(res.body).toEqual([]);
          expect(res.status).toEqual(STATUS.OK);
          expect(service.addresses[mockAddress.id]).toBeUndefined();
          done();
        });
      });
    });

    describe('when the address does not exist', () => {
      it('should return not found', done => {
        result.subscribe(res => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });
    });
  });
});
