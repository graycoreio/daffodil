import { DaffioSidebarSectionStrategy } from './type';

export const daffioSidebarAlwaysShowSectionStrategy: DaffioSidebarSectionStrategy = () => true;
export const daffioSidebarNeverShowSectionStrategy: DaffioSidebarSectionStrategy = () => false;
export const daffioSidebarOnlyShowOnMobileSectionStrategy: DaffioSidebarSectionStrategy = (isBigTablet: boolean) => !isBigTablet;
export const daffioSidebarOnlyShowOnDesktopSectionStrategy: DaffioSidebarSectionStrategy = (isBigTablet: boolean) => isBigTablet;
