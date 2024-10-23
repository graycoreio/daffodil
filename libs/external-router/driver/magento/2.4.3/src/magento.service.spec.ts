import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { TestScheduler } from 'rxjs/testing';

import { ID } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoUrlRewriteEntityTypeEnum,
  MagentoRouteResponse,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv243 } from './graphql/queries/resolve';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';
import { DaffExternalRouterMagentoDriver } from './magento.service';

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
      route: {
        relative_url: responseUrl,
        type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
        redirect_code: 0,
        uid: id,
      },
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

      op.flush({
        data: resolution,
      });
    });
  });

  describe('the driver returning null', () => {
    it('should return a DaffExternallyResolvableUrl with a code of 404', done => {
      setupTest();

      service.resolve(requestUrl).subscribe(result => {
        expect(result.code).toEqual(404);
        done();
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
