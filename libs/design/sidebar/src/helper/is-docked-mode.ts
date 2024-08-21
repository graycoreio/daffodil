import { DaffSidebarModeEnum } from './sidebar-mode';

const DOCKED_MODES = [
  DaffSidebarModeEnum.Side,
  DaffSidebarModeEnum.SideFixed,
];

export const daffSidebarIsDockedMode = (mode: DaffSidebarModeEnum): boolean => DOCKED_MODES.includes(mode);
