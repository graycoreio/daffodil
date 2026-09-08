import {
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

import {
  DaffProductCustomAttribute,
  DaffProductCustomAttributeKind,
} from '@daffodil/product';

import { CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY } from './custom-attribute-transfer-state-key';
import { DaffInMemoryBackendProductCustomAttributeService } from './custom-attribute.service';

describe('Driver | InMemory | Product | DaffInMemoryBackendProductCustomAttributeService', () => {
  let customAttributeTestingService: DaffInMemoryBackendProductCustomAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendProductCustomAttributeService,
      ],
    });

    customAttributeTestingService = TestBed.inject(DaffInMemoryBackendProductCustomAttributeService);
  });

  it('should be created', () => {
    expect(customAttributeTestingService).toBeTruthy();
  });

  describe('transferring state from the server to the browser', () => {
    describe('on browser platform', () => {
      let transferState: TransferState;
      let mockCustomAttributes: DaffProductCustomAttribute[];

      beforeEach(() => {
        mockCustomAttributes = [
          { id: '1', kind: DaffProductCustomAttributeKind.SCALAR, label: 'Attribute 1' },
          { id: '2', kind: DaffProductCustomAttributeKind.SCALAR, label: 'Attribute 2' },
        ];

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductCustomAttributeService,
            { provide: PLATFORM_ID, useValue: 'browser' },
          ],
        });

        transferState = TestBed.inject(TransferState);
        transferState.set(CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY, mockCustomAttributes);

        customAttributeTestingService = TestBed.inject(DaffInMemoryBackendProductCustomAttributeService);
      });

      it('should load custom attributes from transfer state', () => {
        expect(customAttributeTestingService.customAttributes).toEqual(mockCustomAttributes);
      });

      it('should not create new custom attributes', () => {
        expect(customAttributeTestingService.customAttributes.length).toEqual(2);
      });
    });

    describe('on browser platform without transfer state', () => {
      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductCustomAttributeService,
            { provide: PLATFORM_ID, useValue: 'browser' },
          ],
        });

        customAttributeTestingService = TestBed.inject(DaffInMemoryBackendProductCustomAttributeService);
      });

      it('should create default custom attributes from factory', () => {
        expect(customAttributeTestingService.customAttributes.length).toEqual(10);
      });
    });

    describe('on server platform', () => {
      let transferState: TransferState;

      beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          providers: [
            DaffInMemoryBackendProductCustomAttributeService,
            { provide: PLATFORM_ID, useValue: 'server' },
          ],
        });

        transferState = TestBed.inject(TransferState);
        customAttributeTestingService = TestBed.inject(DaffInMemoryBackendProductCustomAttributeService);
      });

      it('should set custom attributes in transfer state', () => {
        const transferStateData = transferState.get(CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY, null);
        expect(transferStateData).toBeTruthy();
        expect(Array.isArray(transferStateData)).toBe(true);
      });
    });
  });

  describe('createDb', () => {
    let result: { customAttributes: DaffProductCustomAttribute[] };

    beforeEach(() => {
      result = customAttributeTestingService.createDb();
    });

    it('should return an object with an array of custom attributes', () => {
      expect(Array.isArray(result.customAttributes)).toEqual(true);
      expect(result.customAttributes.length).toEqual(10);
    });
  });

  describe('get', () => {
    let reqInfoStub: any;
    let result: any;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: (func: () => any) => func(),
        },
      };

      result = customAttributeTestingService.get(reqInfoStub);
    });

    it('should return the full list of custom attributes', () => {
      expect(result.body).toEqual(customAttributeTestingService.customAttributes);
      expect(result.status).toEqual(200);
    });
  });
});
