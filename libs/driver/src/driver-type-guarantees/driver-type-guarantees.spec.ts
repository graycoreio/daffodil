import { async, TestBed } from '@angular/core/testing'
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing'

import { PlatformDriverModule } from './drivers/platform/platform-driver.module'
import { TransformerIn, QueryManager, Driver, TransformerOut } from './drivers/platform'
import { CustomTransformerIn, CustomQueryManager, CustomPlatformResponse, CustomResponse, CustomRequest, CustomPlatformRequest, CustomTransformerOut } from './driver-type-guarantees'
import { ServiceInterface, QueryManagerInterface } from './drivers/interfaces'
import { DaffRequest, PlatformRequest, PlatformResponse } from './drivers/models'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

describe('Driver | Type Guarantees', () => {
  let service: ServiceInterface<CustomResponse>;
  let controller: ApolloTestingController;
  let queryManager: QueryManagerInterface;

  let mockRequest: DaffRequest;
  let mockCustomRequest: CustomRequest;
  let mockPlatformRequest: PlatformRequest;
  let mockCustomPlatformRequest: CustomPlatformRequest;
  let mockPlatformResponse: PlatformResponse;
  let mockCustomPlatformResponse: CustomPlatformResponse;

  beforeEach(() => {
    mockRequest = {
      steph: 'steph',
      curry: 'curry'
    };
    mockCustomRequest = {
      steph: 'steph',
      curry: 'curry',
      points: 50
    };
    mockPlatformRequest = {
      donovan: mockRequest.steph,
      mitchell: mockRequest.curry
    };
    mockCustomPlatformRequest = {
      donovan: mockCustomRequest.steph,
      mitchell: mockCustomRequest.curry,
      points: mockCustomRequest.points
    };
    mockPlatformResponse  = {
      damian: 'damian',
      lillard: 'lillard'
    };
    mockCustomPlatformResponse  = {
      damian: 'damian',
      lillard: 'lillard',
      points: 60
    };
  });

  describe('Custom Driver | Custom Arguments', () => {
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
            provide: TransformerOut,
            useExisting: CustomTransformerOut
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
    }));

    afterEach(() => {
      controller.verify();
    });

    describe('get | getting a custom response', () => {
      it('should return the custom response', done => {
        service.get(mockCustomRequest).subscribe(result => {
          // result is strictly typed as a CustomResponse
          expect(result).toEqual(jasmine.objectContaining({
            luka: mockCustomPlatformResponse.damian,
            doncic: mockCustomPlatformResponse.lillard,
            points: mockCustomPlatformResponse.points
          }));
          done();
        });

        const op = controller.expectOne(queryManager.getPlatformResponse(mockCustomPlatformRequest).query);

        op.flush({
          data: mockCustomPlatformResponse
        });
      });
    });
  });

  describe('Custom Driver | Vanilla Arguments', () => {
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
            provide: TransformerOut,
            useExisting: CustomTransformerOut
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
    }));

    afterEach(() => {
      controller.verify();
    });

    describe('get | getting a custom response', () => {
      it('should throw a TypeError', done => {
        service.get(mockRequest).pipe(
          catchError(err => {
            expect(err).toBeDefined();
            done();
            return of();
          })
        ).subscribe(result => {
          fail();
          done();
        })

        const op = controller.expectOne(queryManager.getPlatformResponse(mockPlatformRequest).query);

        op.flush({
          data: mockPlatformResponse
        });
      });
    });
  });

  describe('Vanilla Driver | Custom Arguments', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ApolloTestingModule,
          PlatformDriverModule,
        ],
      });

      service = TestBed.get(Driver);
      controller = TestBed.get(ApolloTestingController);
      queryManager = TestBed.get(QueryManager);
    }));

    afterEach(() => {
      controller.verify();
    });

    describe('get | getting a vanilla response', () => {
      it('should return the vanilla response', done => {
        service.get(mockCustomRequest).subscribe(result => {
          expect(result).toEqual(jasmine.objectContaining({
            luka: mockCustomPlatformResponse.damian,
            doncic: mockCustomPlatformResponse.lillard,
          }));
          done();
        });

        const op = controller.expectOne(queryManager.getPlatformResponse(mockCustomPlatformRequest).query);

        op.flush({
          data: mockCustomPlatformResponse
        });
      });
    });
  });

  describe('Vanilla Driver | Vanilla Arguments', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          ApolloTestingModule,
          PlatformDriverModule,
        ],
      });

      service = TestBed.get(Driver);
      controller = TestBed.get(ApolloTestingController);
      queryManager = TestBed.get(QueryManager);
    }));

    afterEach(() => {
      controller.verify();
    });

    describe('get | getting a vanilla response', () => {
      it('should return the vanilla response', done => {
        service.get(mockRequest).subscribe(result => {
          expect(result).toEqual(jasmine.objectContaining({
            luka: mockPlatformResponse.damian,
            doncic: mockPlatformResponse.lillard,
          }));
          done();
        });

        const op = controller.expectOne(queryManager.getPlatformResponse(mockPlatformRequest).query);

        op.flush({
          data: mockPlatformResponse
        });
      });
    });
  });
});
