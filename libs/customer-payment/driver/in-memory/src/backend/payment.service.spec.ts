import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

import { DaffCustomerPaymentInMemoryBackendService } from './payment.service';

describe('@daffodil/customer-payment/driver/in-memory | DaffCustomerPaymentInMemoryBackendService', () => {
  let service: DaffCustomerPaymentInMemoryBackendService;
  let paymentFactory: DaffCustomerPaymentFactory;
  let mockPayment: DaffCustomerPayment;
  let reqInfoStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerPaymentInMemoryBackendService,
      ],
    });

    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);
    service = TestBed.inject(DaffCustomerPaymentInMemoryBackendService);

    mockPayment = paymentFactory.create();
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
          id: mockPayment.id,
        };
        result = service.get(reqInfoStub);
      });

      describe('and when the payment exists', () => {
        beforeEach(() => {
          service.payments[mockPayment.id] = mockPayment;
          result = service.get(reqInfoStub);
        });

        it('should return the payment', done => {
          result.subscribe(res => {
            expect(res.body).toEqual(mockPayment);
            expect(res.status).toEqual(STATUS.OK);
            done();
          });
        });
      });

      describe('and when the payment does not exist', () => {
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
        service.payments[mockPayment.id] = mockPayment;
        result = service.get(reqInfoStub);
      });

      it('should return the payments', done => {
        result.subscribe(res => {
          expect(res.body).toEqual([mockPayment]);
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

    describe('when the payment exists', () => {
      let nickname: string;

      beforeEach(() => {
        nickname = `updated ${mockPayment.nickname}`;
        service.payments[mockPayment.id] = mockPayment;
        reqInfoStub = {
          ...reqInfoStub,
          id: mockPayment.id,
          req: {
            body: {
              nickname,
            },
          },
        };
        result = service.put(reqInfoStub);
      });

      it('should update the payment and return the collection', done => {
        result.subscribe(res => {
          expect(res.body).toContain(jasmine.objectContaining({ nickname }));
          expect(res.status).toEqual(STATUS.OK);
          expect(service.payments[mockPayment.id].nickname).toEqual(nickname);
          done();
        });
      });
    });

    describe('when the payment does not exist', () => {
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
          body: mockPayment,
        },
      };
      result = service.post(reqInfoStub);
    });

    it('should add the payment and return the collection', done => {
      result.subscribe(res => {
        expect(res.body).toContain(mockPayment);
        expect(Object.values(service.payments)).toContain(mockPayment);
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
        id: mockPayment.id,
      };
      result = service.delete(reqInfoStub);
    });

    describe('when the payment exists', () => {
      beforeEach(() => {
        service.payments[mockPayment.id] = mockPayment;
        result = service.delete(reqInfoStub);
      });

      it('should delete the payment and return the collection', done => {
        result.subscribe(res => {
          expect(res.body).toEqual([]);
          expect(res.status).toEqual(STATUS.OK);
          expect(service.payments[mockPayment.id]).toBeUndefined();
          done();
        });
      });
    });

    describe('when the payment does not exist', () => {
      it('should return not found', done => {
        result.subscribe(res => {
          expect(res.status).toEqual(STATUS.NOT_FOUND);
          done();
        });
      });
    });
  });
});
