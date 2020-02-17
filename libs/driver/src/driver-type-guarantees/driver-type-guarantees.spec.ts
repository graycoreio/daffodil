import { async, TestBed } from '@angular/core/testing'
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing'

import { PlatformDriverModule } from './drivers/platform/platform-driver.module'
import { TransformerIn, QueryManager, Driver } from './drivers/platform'
import { CustomTransformerIn, CustomQueryManager, CustomPlatformResponse, CustomResponse } from './driver-type-guarantees'
import { ServiceInterface } from './drivers/interfaces'
import { DaffRequest, PlatformRequest } from './drivers/models'

describe('Driver | Type Guarantees', () => {
  let service: ServiceInterface<CustomResponse>;
  let controller: ApolloTestingController;
  let queryManager: CustomQueryManager;

  let mockRequest: DaffRequest;
  let mockPlatformRequest: PlatformRequest;
  let mockCustomPlatformResponse: CustomPlatformResponse;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        PlatformDriverModule,
      ],
      providers: [
        {
          provide: TransformerIn,
          useExisting: CustomTransformerIn
        },
        {
          provide: QueryManager,
          useExisting: CustomQueryManager
        }
      ]
    });

    service = TestBed.get(Driver);
    controller = TestBed.get(ApolloTestingController);
    queryManager = TestBed.get(QueryManager);

    mockRequest = {
      steph: 'steph',
      curry: 'curry'
    };
    mockPlatformRequest = {
      donovan: mockRequest.steph,
      mitchell: mockRequest.curry
    };
    mockCustomPlatformResponse  = {
      damian: 'damian',
      lillard: 'lillard',
      points: 60
    };
  }));

  afterEach(() => {
    controller.verify();
  })

  describe('get | getting a custom response', () => {
    it('should return the custom response', done => {
      service.get(mockRequest).subscribe(result => {
        // result is strictly typed as a CustomResponse
        expect(result).toEqual(jasmine.objectContaining({
          luka: mockCustomPlatformResponse.damian,
          doncic: mockCustomPlatformResponse.lillard,
          points: mockCustomPlatformResponse.points
        }));
        done();
      });

      const op = controller.expectOne(queryManager.getPlatformResponse(mockPlatformRequest).query);

      op.flush({
        data: mockCustomPlatformResponse
      });
    });
  });
});
