import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client';
import {
  APOLLO_TESTING_CACHE,
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { TestScheduler } from 'rxjs/testing';

import { ID } from '@daffodil/core';
import { MAGENTO_POSSIBLE_TYPES } from '@daffodil/driver/magento';
import {
  DaffExternallyResolvableUrl,
  DaffExternalRouterNotFoundError,
} from '@daffodil/external-router';
import {
  MagentoUrlRewriteEntityTypeEnum,
  MagentoRouteResponse,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv243 } from './graphql/queries/resolve';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';
import { DaffExternalRouterMagentoDriver } from './magento.service';
import { createMagentoProductRoute } from '../testing/create-product-route';

describe('@daffodil/external-router/driver/magento/2.4.3 | DaffExternalRouterMagentoDriver', () => {
  let service: DaffExternalRouterMagentoDriver;
  let controller: ApolloTestingController;
  let scheduler: TestScheduler;
  let id: ID;
  let responseUrl: string;
  let requestUrl: string;
  let resolution: MagentoRouteResponse;
  let resolvableUrl: DaffExternallyResolvableUrl;

  const setupTest = () => {
    TestBed.configureTestingModule({
      imports: [
        DaffExternalRouterDriverMagentoModule.forRoot(),
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            possibleTypes: MAGENTO_POSSIBLE_TYPES.possibleTypes,
          }),
        },
      ],
    });
    service = TestBed.inject(DaffExternalRouterMagentoDriver);
    controller = TestBed.inject(ApolloTestingController);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    responseUrl = 'url';
    requestUrl = `/${responseUrl}`;
    id = 'id';
    resolution = {
      route: createMagentoProductRoute({
        relative_url: responseUrl,
        uid: id,
      }),
    };

    resolvableUrl = {
      id,
      url: responseUrl,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      code: 200,
    };
  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('should return a resolvable url when using the v2.4.3 query', done => {
      setupTest();

      service.resolve(requestUrl).subscribe(result => {
        expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrlv243);

      op.flushData(resolution);
    });
  });

  describe('the driver returning null', () => {
    it('should throw a DaffExternalRouterNotFoundError', done => {
      setupTest();

      service.resolve(requestUrl).subscribe({
        next: () => done.fail('Expected resolve to error for null response'),
        error: (err) => {
          expect(err).toEqual(jasmine.any(DaffExternalRouterNotFoundError));
          done();
        },
      });

      const op = controller.expectOne(MagentoResolveUrlv243);

      op.flush({
        data: {
          route: null,
        },
      });
    });
  });
});
