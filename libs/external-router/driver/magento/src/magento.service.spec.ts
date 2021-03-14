import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import {
  MagentoResolution,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { MagentoResolveUrl } from './graphql/queries/resolve-url';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';
import { DaffExternalRouterMagentoDriver } from './magento.service';

describe('@daffodil/external-router/driver/magento | DaffExternalRouterMagentoDriver', () => {
  let service: DaffExternalRouterMagentoDriver;
  let controller: ApolloTestingController;
  let scheduler: TestScheduler;
  let url: string;
  let resolution: MagentoResolution;
  let resolvableUrl: DaffExternallyResolvableUrl;

  const setupTest = (
  ) => {
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

    url = 'url';
    resolution = {
      relative_url: url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirectCode: 0,
      entity_uid: '',
    };
    resolvableUrl = {
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    };
  };

  it('should be created', () => {
    setupTest();
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('should return a resolvable url', done => {
      setupTest();

      service.resolve(url).subscribe(result => {
        expect(result.url).toEqual(url);
        expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
        done();
      });

      const op = controller.expectOne(MagentoResolveUrl);

      op.flush({
        data: resolution,
      });
    });
  });
});
