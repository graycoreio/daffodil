import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import {
  DaffCart,
  DaffCartCoupon,
  MagentoCart
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartCouponFactory,
  MagentoCartFactory,
} from '@daffodil/cart/testing';
import { DaffBadInputError } from '@daffodil/driver';

import { DaffMagentoCartCouponService } from './cart-coupon.service';
import {
  applyCoupon,
  listCartCoupons,
  removeAllCoupons
} from './queries/public_api';
import { DaffCartNotFoundError } from '../../errors/public_api';
import {
  MagentoApplyCouponResponse,
  MagentoListCartCouponsResponse,
  MagentoRemoveAllCouponsResponse
} from './models/responses/public_api';

describe('Driver | Magento | Cart | CartCouponService', () => {
  let service: DaffMagentoCartCouponService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let daffCartCouponFactory: DaffCartCouponFactory;

  let cartId;
  let orderNumber;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockDaffCartCoupon: DaffCartCoupon;
  let mockApplyCouponResponse: MagentoApplyCouponResponse;
  let mockListCouponsResponse: MagentoListCartCouponsResponse;
  let mockRemoveAllCouponsResponse: MagentoRemoveAllCouponsResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartCouponService,
      ]
    });

    service = TestBed.get(DaffMagentoCartCouponService);
    controller = TestBed.get(ApolloTestingController);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    daffCartCouponFactory = TestBed.get(DaffCartCouponFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockDaffCartCoupon = daffCartCouponFactory.create();

    cartId = mockDaffCart.id;
    mockMagentoCart.id = cartId;
    orderNumber = '28349539482';
    mockApplyCouponResponse = {
      applyCouponToCart: {
        cart: mockMagentoCart
      }
    };
    mockRemoveAllCouponsResponse = {
      removeCouponFromCart: {
        cart: mockMagentoCart
      }
    };
    mockListCouponsResponse = {
      cart: mockMagentoCart
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apply | applying a coupon to the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        mockApplyCouponResponse.applyCouponToCart.cart.applied_coupons = [mockDaffCartCoupon];
      });

      it('should return a cart with the coupon applied', done => {
        service.apply(cartId, mockDaffCartCoupon).subscribe(result => {
          expect(result.coupons[0].code).toEqual(mockDaffCartCoupon.code);
          done();
        });

        const op = controller.expectOne(applyCoupon);

        op.flush({
          data: mockApplyCouponResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.apply(cartId, mockDaffCartCoupon).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(applyCoupon);

          op.graphqlErrors([new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-no-such-entity'}
          )]);
        });
      });

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.apply(cartId, mockDaffCartCoupon).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(applyCoupon);

          op.graphqlErrors([new GraphQLError(
            'The required coupon_code argument contains an empty value.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-input'}
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('list | listing the coupons in the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        mockListCouponsResponse.cart.applied_coupons = [mockDaffCartCoupon];
      });

      it('should return a list of coupons', done => {
        service.list(cartId).subscribe(result => {
          expect(result[0].code).toEqual(mockDaffCartCoupon.code);
          done();
        });

        const op = controller.expectOne(listCartCoupons);

        op.flush({
          data: mockListCouponsResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(listCartCoupons);

          op.graphqlErrors([new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-no-such-entity'}
          )]);
        });
      });

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.list(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(listCartCoupons);

          op.graphqlErrors([new GraphQLError(
            'The required coupon_code argument contains an empty value.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-input'}
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('remove | removing a coupon from the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        mockRemoveAllCouponsResponse.removeCouponFromCart.cart.applied_coupons = [];
      });

      it('should return a cart without the coupon applied', done => {
        service.remove(cartId, mockDaffCartCoupon).subscribe(result => {
          expect(result.coupons).not.toContain(mockDaffCartCoupon);
          done();
        });

        const op = controller.expectOne(removeAllCoupons);

        op.flush({
          data: mockRemoveAllCouponsResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.remove(cartId, mockDaffCartCoupon).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(removeAllCoupons);

          op.graphqlErrors([new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-no-such-entity'}
          )]);
        });
      });

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.remove(cartId, mockDaffCartCoupon).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(removeAllCoupons);

          op.graphqlErrors([new GraphQLError(
            'The required coupon_code argument contains an empty value.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-input'}
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('removeAll | removing all coupons from the specified cart', () => {
    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        mockRemoveAllCouponsResponse.removeCouponFromCart.cart.applied_coupons = [];
      });

      it('should return a cart with no coupons', done => {
        service.removeAll(cartId).subscribe(result => {
          expect(result.coupons).toEqual([]);
          done();
        });

        const op = controller.expectOne(removeAllCoupons);

        op.flush({
          data: mockRemoveAllCouponsResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      describe('because of a graphql-no-such-entity error', () => {
        it('should throw a DaffCartNotFoundError', done => {
          service.removeAll(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(removeAllCoupons);

          op.graphqlErrors([new GraphQLError(
            'Can\'t find a cart with that ID.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-no-such-entity'}
          )]);
        });
      });

      describe('because of a graphql-input error', () => {
        it('should throw a DaffBadInputError', done => {
          service.removeAll(cartId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffBadInputError));
              done();
              return [];
            })
          ).subscribe();

          const op = controller.expectOne(removeAllCoupons);

          op.graphqlErrors([new GraphQLError(
            'The required cart_id argument contains an empty value.',
            null,
            null,
            null,
            null,
            null,
            {category: 'graphql-input'}
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
