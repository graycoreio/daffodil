import { InjectionToken } from "@angular/core";

export interface DaffCartShippingMethodsServiceInterface {
  list(): any[];
}

export const DaffCartShippingMethodsDriver 
  = new InjectionToken<DaffCartShippingMethodsServiceInterface>('DaffCartShippingMethodsDriver');

