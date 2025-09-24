import { TestBed } from '@angular/core/testing';

import {
  DaffDevToolsConfigService,
  DAFF_DEV_TOOLS_CONFIG,
} from './dev-tools-config.service';
import { DaffDevToolsDriver } from '../interfaces/driver';
import {
  DaffDevToolsConfig,
  DaffDriverConfig,
} from '../interfaces/driver-config.interface';

describe('DaffDevToolsConfigService', () => {
  let service: DaffDevToolsConfigService;

  const createMockDriver1 = (): DaffDevToolsDriver => ({
    id: 'driver1',
    name: 'Driver 1',
    properties: new Map([
      ['prop1', { type: 'input', id: 'prop1', label: 'Property 1', defaultValue: 'default1' }],
    ]),
  });

  const createMockDriver2 = (): DaffDevToolsDriver => ({
    id: 'driver2',
    name: 'Driver 2',
    properties: new Map([
      ['prop2', { type: 'input', id: 'prop2', label: 'Property 2', defaultValue: 'default2' }],
    ]),
  });

  const createMockConfig = (): DaffDevToolsConfig => {
    const mockDriver1 = createMockDriver1();
    const mockDriver2 = createMockDriver2();

    const mockDriverConfig: DaffDriverConfig = {
      name: 'Test Driver',
      currentDriver: 'driver1',
      availableDrivers: [mockDriver1, mockDriver2],
      storedConfigurations: {
        driver1: { prop1: 'default1' },
        driver2: { prop2: 'default2' },
      },
    };

    return {
      drivers: [mockDriverConfig],
      enabled: true,
      startCollapsed: false,
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffDevToolsConfigService,
        { provide: DAFF_DEV_TOOLS_CONFIG, useFactory: createMockConfig },
      ],
    });

    service = TestBed.inject(DaffDevToolsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDriverConfig', () => {
    it('should emit value immediately upon subscription', (done) => {
      service.getDriverConfig('Test Driver').subscribe(driver => {
        // First emission should happen immediately
        expect(driver).toBeDefined();
        expect(driver?.name).toBe('Test Driver');
        expect(driver?.currentDriver).toBe('driver1');
        expect(driver?.storedConfigurations).toEqual({
          driver1: { prop1: 'default1' },
          driver2: { prop2: 'default2' },
        });
        done();
      });
    });

    it('should return undefined for non-existent driver', (done) => {
      service.getDriverConfig('Non-existent Driver').subscribe(driver => {
        expect(driver).toBeUndefined();
        done();
      });
    });

    it('should emit updated values when driver config changes', (done) => {
      let emissionCount = 0;

      service.getDriverConfig('Test Driver').subscribe(driver => {
        emissionCount++;

        if (emissionCount === 1) {
          // First emission - initial value
          expect(driver?.currentDriver).toBe('driver1');

          // Update the driver configuration
          setTimeout(() => {
            service.applyDriverConfiguration('Test Driver', 'driver2', {});
          }, 0);
        } else if (emissionCount === 2) {
          // Second emission - after update
          expect(driver?.currentDriver).toBe('driver2');
          done();
        }
      });
    });
  });

  describe('getDriverPropertyValues', () => {
    it('should return stored configuration for a driver', () => {
      const values = service.getDriverPropertyValues('Test Driver', 'driver1');
      expect(values).toEqual({ prop1: 'default1' });
    });

    it('should return stored configuration for second driver', () => {
      const values = service.getDriverPropertyValues('Test Driver', 'driver2');
      expect(values).toEqual({ prop2: 'default2' });
    });

    it('should return empty object for non-existent driver', () => {
      const values = service.getDriverPropertyValues('Non-existent', 'driver1');
      expect(values).toEqual({});
    });

    it('should return empty object for non-existent driver id', () => {
      const values = service.getDriverPropertyValues('Test Driver', 'non-existent');
      expect(values).toEqual({});
    });
  });

  describe('applyDriverConfiguration', () => {
    it('should store new configuration for a driver', (done) => {
      const newConfig = { prop1: 'updated value' };

      service.applyDriverConfiguration('Test Driver', 'driver1', newConfig);

      service.getDriverConfig('Test Driver').subscribe(driver => {
        expect(driver?.storedConfigurations?.['driver1']).toEqual(newConfig);
        done();
      });
    });
  });

  describe('initializeDriverProperties', () => {
    it('should return properties for the current driver', () => {
      const props = service.initializeDriverProperties('Test Driver');
      expect(props).toEqual({ prop1: 'default1' });
    });
  });

  describe('resetDriverToDefaults', () => {
    it('should reset driver to default values', () => {
      // First, modify the stored configuration
      service.applyDriverConfiguration('Test Driver', 'driver1', { prop1: 'modified' });

      // Then reset to defaults
      const defaults = service.resetDriverToDefaults('Test Driver', 'driver1');

      expect(defaults).toEqual({ prop1: 'default1' });

      // Verify it was stored
      const stored = service.getDriverPropertyValues('Test Driver', 'driver1');
      expect(stored).toEqual({ prop1: 'default1' });
    });
  });

  describe('getSelectedDriver', () => {
    it('should return the currently selected driver object', () => {
      const selected = service.getSelectedDriver('Test Driver');

      expect(selected).toBeDefined();
      expect(selected?.id).toBe('driver1');
      expect(selected?.name).toBe('Driver 1');
    });

    it('should return null for non-existent driver section', () => {
      const selected = service.getSelectedDriver('Non-existent');
      expect(selected).toBeNull();
    });
  });
});
