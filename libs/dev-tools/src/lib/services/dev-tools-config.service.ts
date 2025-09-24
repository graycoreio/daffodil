import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffDevToolsDriver } from '../interfaces/driver';
import {
  DaffDriverConfig,
  DaffDevToolsConfig,
} from '../interfaces/driver-config.interface';
import { DAFF_DEV_TOOLS_CONFIG } from '../tokens/config';

// Re-export the token for convenience
export { DAFF_DEV_TOOLS_CONFIG };

/**
 * Service for managing dev tools configuration and driver registrations
 */
@Injectable()
export class DaffDevToolsConfigService {
  private readonly _config = new BehaviorSubject<DaffDevToolsConfig>({
    drivers: [],
    enabled: true,
    startCollapsed: true,
  });

  constructor(@Inject(DAFF_DEV_TOOLS_CONFIG) config: DaffDevToolsConfig) {
    this.setConfig(config);
  }

  /**
   * Observable of the complete dev tools configuration
   */
  readonly config$: Observable<DaffDevToolsConfig> = this._config.asObservable();

  /**
   * Observable of all registered driver configurations
   */
  readonly drivers$: Observable<DaffDriverConfig[]> = this.config$.pipe(
    map(config => config.drivers),
  );


  /**
   * Get current driver configurations
   */
  getDrivers(): DaffDriverConfig[] {
    return this._config.value.drivers;
  }

  /**
   * Get current dev tools configuration
   */
  getConfig(): DaffDevToolsConfig {
    return this._config.value;
  }

  /**
   * Get observable for a specific driver configuration by name
   */
  getDriverConfig(name: string): Observable<DaffDriverConfig | undefined> {
    return this.drivers$.pipe(
      map(drivers => drivers.find(driver => driver.name === name)),
    );
  }

  /**
   * Store the current configuration for a specific driver
   * @param driverName The name of the driver section
   * @param driverId The ID of the specific driver to store config for
   * @param properties The properties to store
   */
  applyDriverConfiguration(driverName: string, driverId: string, properties: Record<string, any>): void {
    const currentConfig = this._config.value;
    const currentDrivers = [...currentConfig.drivers];
    const driverIndex = currentDrivers.findIndex(d => d.name === driverName);

    if (driverIndex >= 0) {
      const driver = currentDrivers[driverIndex];
      const storedConfigs = driver.storedConfigurations || {};
      storedConfigs[driverId] = properties;

      currentDrivers[driverIndex] = {
        ...driver,
        currentDriver: driverId,
        storedConfigurations: storedConfigs,
      };

      this._config.next({
        ...currentConfig,
        drivers: currentDrivers,
      });
    }
  }

  /**
   * Get stored configuration for a specific driver
   * @param driverName The name of the driver section
   * @param driverId The ID of the specific driver to get config for
   * @returns The stored configuration or undefined if not found
   */
  getStoredDriverConfiguration(driverName: string, driverId: string): Record<string, any> | undefined {
    const driver = this._config.value.drivers.find(d => d.name === driverName);
    return driver?.storedConfigurations?.[driverId];
  }

  /**
   * Get the currently selected driver for a driver section
   * @param driverName The name of the driver section
   * @returns The selected driver or null if not found
   */
  getSelectedDriver(driverName: string): DaffDevToolsDriver | null {
    const driver = this._config.value.drivers.find(d => d.name === driverName);
    if (!driver) {
      return null;
    }

    return driver.availableDrivers.find(d => d.id === driver.currentDriver) || null;
  }

  /**
   * Get property values for the current driver from storage
   * @param driverName The name of the driver section
   * @param driverId The ID of the driver
   * @returns Property values for the driver
   */
  getDriverPropertyValues(driverName: string, driverId: string): Record<string, any> {
    const driver = this._config.value.drivers.find(d => d.name === driverName);
    if (!driver) {
      return {};
    }

    // Return stored configuration (now always prefilled with defaults)
    const storedConfig = driver.storedConfigurations?.[driverId];
    return storedConfig ? { ...storedConfig } : {};
  }

  /**
   * Initialize property values for a driver from storage or defaults
   * @param driverName The name of the driver section
   * @returns Property values for the current driver
   */
  initializeDriverProperties(driverName: string): Record<string, any> {
    const driver = this._config.value.drivers.find(d => d.name === driverName);
    if (!driver) {
      return {};
    }

    return this.getDriverPropertyValues(driverName, driver.currentDriver);
  }

  /**
   * Reset a driver to its default property values
   * @param driverName The name of the driver section
   * @param driverId The ID of the driver to reset
   * @returns The default property values
   */
  resetDriverToDefaults(driverName: string, driverId: string): Record<string, any> {
    const driver = this._config.value.drivers.find(d => d.name === driverName);
    if (!driver) {
      return {};
    }

    const availableDriver = driver.availableDrivers.find(d => d.id === driverId);
    if (!availableDriver) {
      return {};
    }

    const defaultValues: Record<string, any> = {};
    if (availableDriver.properties) {
      availableDriver.properties.forEach((property, key) => {
        defaultValues[key] = property.defaultValue || '';
      });
    }

    // Store the default values
    this.applyDriverConfiguration(driverName, driverId, defaultValues);

    return defaultValues;
  }

  /**
   * Set the complete dev tools configuration
   */
  setConfig(config: Partial<DaffDevToolsConfig>): void {
    const currentConfig = this._config.value;
    const newConfig = { ...currentConfig, ...config };
    this._config.next(newConfig);
  }

}
