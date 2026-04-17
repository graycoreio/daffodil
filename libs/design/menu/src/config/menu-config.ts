import { createConfigInjectionToken } from '@daffodil/core';

/**
 * Configuration for a menu instance.
 */
export interface DaffMenuConfig {
  /**
   * A unique identifier for the menu instance.
   */
  menuId?: string;
}

const daffMenuConfigDefault: DaffMenuConfig = {
  menuId: '',
};

export const {
  /**
   * An injection token for the menu configuration.
   */
  token: DAFF_MENU_CONFIG,
  /**
   * Provider function for {@link DAFF_MENU_CONFIG}.
   */
  provider: provideDaffMenuConfig,
} = createConfigInjectionToken<DaffMenuConfig>(daffMenuConfigDefault, 'DAFF_MENU_CONFIG');
