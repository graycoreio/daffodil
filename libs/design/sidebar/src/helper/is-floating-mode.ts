import { DaffSidebarModeEnum } from './sidebar-mode';

const FLOATING_MODES = [
  DaffSidebarModeEnum.Under,
  DaffSidebarModeEnum.Over,
];

/**
 * Returns whether the passed mode is a floating mode, i.e. under or over.
 */
export const daffSidebarIsFloatingMode = (mode: DaffSidebarModeEnum): boolean => FLOATING_MODES.includes(mode);
