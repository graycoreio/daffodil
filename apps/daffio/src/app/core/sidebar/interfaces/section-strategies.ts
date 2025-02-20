import { DaffioSidebarSectionVisibilityStrategy } from './section-visibility-strategy.type';

export const daffioSidebarAlwaysShowSectionStrategy: DaffioSidebarSectionVisibilityStrategy = () => true;
export const daffioSidebarNeverShowSectionStrategy: DaffioSidebarSectionVisibilityStrategy = () => false;
export const daffioSidebarOnlyShowOnMobileSectionStrategy: DaffioSidebarSectionVisibilityStrategy = (isBigTablet: boolean) => !isBigTablet;
export const daffioSidebarOnlyShowOnDesktopSectionStrategy: DaffioSidebarSectionVisibilityStrategy = (isBigTablet: boolean) => isBigTablet;
