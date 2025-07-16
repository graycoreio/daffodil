import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import { DaffContentPage } from '@daffodil/content';
import {
  DaffContentInvalidAPIResponseError,
  DaffContentNotFoundError,
} from '@daffodil/content/driver';
import {
  MagentoCmsPage,
  MagentoContentGetPageResponse,
  getCmsPage,
} from '@daffodil/content/driver/magento';
import { MagentoCmsPageFactory } from '@daffodil/content/driver/magento/testing';
import { schema } from '@daffodil/driver/magento';

import { MagentoContentPageService } from './page.service';

describe('@daffodil/content/driver/magento | MagentoContentPageService', () => {
  let service: MagentoContentPageService;
  let controller: ApolloTestingController;
  let factory: MagentoCmsPageFactory;

  let pageId: DaffContentPage['id'];
  let mockMagentoPage: MagentoCmsPage;
  let mockGetPageResponse: MagentoContentGetPageResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        MagentoContentPageService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(MagentoContentPageService);
    controller = TestBed.inject(ApolloTestingController);
    factory = TestBed.inject(MagentoCmsPageFactory);

    mockMagentoPage = factory.create();

    pageId = mockMagentoPage.identifier;

    mockGetPageResponse = {
      route: mockMagentoPage,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response fails validation', () => {
        beforeEach(() => {
          mockGetPageResponse.route = null;
        });

        it('should throw a DaffContentInvalidAPIResponseError', done => {
          service.get(pageId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffContentInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(getCmsPage()));

          op.flush({
            data: mockGetPageResponse,
          });
        });
      });

      describe('and the response passes validation', () => {
        it('should return the correct Daffodil content', done => {
          service.get(pageId).subscribe(result => {
            expect(result.id).toEqual(mockMagentoPage.identifier);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(getCmsPage()));

          op.flush({
            data: mockGetPageResponse,
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffContentNotFoundError', done => {
        service.get(pageId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffContentNotFoundError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCmsPage()));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a page with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });
  });
});
