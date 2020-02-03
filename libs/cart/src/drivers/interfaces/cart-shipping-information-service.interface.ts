import { InjectionToken } from "@angular/core";

/**
 * The interface responsible for mediating the interaction of the shipping 
 * information of a cart with a given platform.
 */
export interface DaffCartShippingInformationServiceInterface {
  list(): any[];
}

export const DaffCartShippingInformationDriver 
  = new InjectionToken<DaffCartShippingInformationServiceInterface>('DaffCartShippingInformationDriver');

