import { ModuleWithProviders } from '@angular/core';
import { MagentoNavigationDriverConfiguration } from './interfaces/navigation-config.interface';
export declare const MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION: MagentoNavigationDriverConfiguration;
export declare class DaffNavigationMagentoDriverModule {
    static forRoot(config?: MagentoNavigationDriverConfiguration): ModuleWithProviders<DaffNavigationMagentoDriverModule>;
}
