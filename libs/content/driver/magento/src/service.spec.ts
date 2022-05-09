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

import { DaffContentBlock } from '@daffodil/content';
import {
  DaffContentInvalidAPIResponseError,
  DaffContentNotFoundError,
} from '@daffodil/content/driver';
import {
  MagentoContentBlock,
  MagentoGetBlocksResponse,
  getCmsBlocks,
} from '@daffodil/content/driver/magento';
import { MagentoContentBlockFactory } from '@daffodil/content/driver/magento/testing';
import { schema } from '@daffodil/driver/magento';

import { MagentoContentService } from './service';

describe('@daffodil/content/driver/magento | MagentoContentService', () => {
  let service: MagentoContentService;
  let controller: ApolloTestingController;
  let blockFactory: MagentoContentBlockFactory;

  let blockId: DaffContentBlock['id'];
  let mockMagentoBlock: MagentoContentBlock;
  let mockGetBlocksResponse: MagentoGetBlocksResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        MagentoContentService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(MagentoContentService);
    controller = TestBed.inject(ApolloTestingController);
    blockFactory = TestBed.inject(MagentoContentBlockFactory);

    mockMagentoBlock = blockFactory.create();

    blockId = mockMagentoBlock.identifier;

    mockGetBlocksResponse = {
      cmsBlocks: {
        __typename: 'CmsBlocks',
        items: [mockMagentoBlock],
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('and the response fails validation', () => {
        beforeEach(() => {
          mockGetBlocksResponse.cmsBlocks.items = null;
        });

        it('should throw a DaffContentInvalidAPIResponseError', done => {
          service.getBlocks(blockId).pipe(
            catchError(err => {
              expect(err).toEqual(jasmine.any(DaffContentInvalidAPIResponseError));
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(getCmsBlocks));

          op.flush({
            data: mockGetBlocksResponse,
          });
        });
      });

      describe('and the response passes validation', () => {
        it('should return the correct Daffodil content', done => {
          service.getBlocks(blockId).subscribe(result => {
            expect(result[0].id).toEqual(mockMagentoBlock.identifier);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(getCmsBlocks));

          op.flush({
            data: mockGetBlocksResponse,
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffContentNotFoundError', done => {
        service.getBlocks(blockId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffContentNotFoundError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCmsBlocks));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a block with that ID.',
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
