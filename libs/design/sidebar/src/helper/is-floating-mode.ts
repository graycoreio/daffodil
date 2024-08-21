import { DaffSidebarModeEnum } from './sidebar-mode';

const FLOATING_MODES = [
  DaffSidebarModeEnum.Under,
  DaffSidebarModeEnum.Over,
];

export const daffSidebarIsFloatingMode = (mode: DaffSidebarModeEnum): boolean => FLOATING_MODES.includes(mode);
