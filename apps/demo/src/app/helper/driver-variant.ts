import { ModuleWithProviders } from '@angular/core';

import { InMemoryModule } from '../in-memory.module';
import { ShopifyModule } from '../shopify.module';
import { DriverVariants } from './driver-variant.enum';
import { MagentoModule } from '../magento.module';

export const getDriverVariant = (driver: string): any => {
    switch(driver) {
        case DriverVariants.SHOPIFY:
            return ShopifyModule;
        case DriverVariants.MAGENTO:
            return MagentoModule;
        case DriverVariants.INMEMORY:
            return InMemoryModule
        default:
            return InMemoryModule;
    }
}