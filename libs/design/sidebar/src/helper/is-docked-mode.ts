import { DaffSidebarModeEnum } from './sidebar-mode';

const DOCKED_MODES = [
  DaffSidebarModeEnum.Side,
  DaffSidebarModeEnum.SideFixed,
];

/**
 * Returns whether the passed mode is a docked mode, i.e. side or side-fixed.
 */
export const daffSidebarIsDockedMode = (mode: DaffSidebarModeEnum): boolean => DOCKED_MODES.includes(mode);
