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
  MagentoUrlResolverResponse,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrlv241 } from './graphql/queries/resolve-url-v2.4.1';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';
import { DaffExternalRouterMagentoDriver } from './magento.service';

describe('@daffodil/external-router/driver/magento/2-4-1 | DaffExternalRouterMagentoDriver', () => {
  let service: DaffExternalRouterMagentoDriver;
  let controller: ApolloTestingController;
  let scheduler: TestScheduler;
  let responseUrl: string;
  let requestUrl: string;
  let id: ID;
  let resolution: MagentoUrlResolverResponse;
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
      urlResolver: {
        relative_url: responseUrl,
        type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
        redirectCode: 0,
        id: null,
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
    it('should return a resolvable url when using v2.4.1', done => {
      setupTest();

      service.resolve(requestUrl).subscribe(result => {
        expect(result.url).toEqual(responseUrl);
        expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrlv241);

      op.flush({
        data: resolution,
      });
    });

    describe('when the request URL has query params and fragments', () => {
      it('should make the request with a truncated URL', () => {
        setupTest();

        service.resolve(`${requestUrl}?with=query#fragment`).subscribe();

        const op = controller.expectOne(MagentoResolveUrlv241);
        expect(op.operation.variables.url).toEqual(requestUrl);
      });
    });

    it('should return a DaffExternallyResolvableUrl with a code of 404 when Magento returns null', done => {
      setupTest();

      service.resolve(requestUrl).subscribe(result => {
        expect(result.code).toEqual(404);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrlv241);

      op.flush({
        data: {
          urlResolver: null,
        },
      });
    });
  });
});
