import { InjectionToken } from '@angular/core';

/**
 * Configuration interface for the Medusa product driver.
 */
export interface DaffMedusaConfig {
  /** Base URL of the Medusa storefront API */
  api_url: string;
  /** Medusa publishable API key for authentication */
  publishableApiKey: string;
}

/**
 * Injection token for Medusa configuration.
 * Used to provide DaffMedusaConfig throughout the driver.
 */
export const DAFF_MEDUSA_CONFIG = new InjectionToken<DaffMedusaConfig>('DAFF_MEDUSA_CONFIG');
