import { ModuleWithProviders } from "@angular/core";

import { InMemoryModule } from "../in-memory.module";
import { ShopifyModule } from "../shopify.module";
import { DriverVariants } from "./driver-variant.enum";

export const getDriverVariant = (driver: string): any => {
    switch(driver) {
        case DriverVariants.SHOPIFY:
            return InMemoryModule;
        case DriverVariants.MAGENTO:
            return ShopifyModule;
        case DriverVariants.INMEMORY:
            return InMemoryModule
        default:
            return InMemoryModule;
    }
}