import { createConfigInjectionToken } from '@daffodil/core';

import {
  DaffMenuXPosition,
  DaffMenuYPosition,
} from '../helpers/menu-position';

/**
 * Configuration for a menu instance.
 */
export interface DaffMenuConfig {
  /**
   * A unique identifier for the menu instance.
   */
  menuId?: string;

  /**
   * The horizontal alignment of the menu relative to its activator. Defaults to `after`.
   */
  xPosition?: DaffMenuXPosition;

  /**
   * The vertical position of the menu relative to its activator. Defaults to `below`.
   */
  yPosition?: DaffMenuYPosition;
}

const daffMenuConfigDefault: DaffMenuConfig = {
  menuId: '',
  xPosition: 'after',
  yPosition: 'below',
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
