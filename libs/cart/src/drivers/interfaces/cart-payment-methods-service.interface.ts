import { InjectionToken } from "@angular/core";

export interface DaffCartPaymentMethodsServiceInterface {
  list(): any[];
}

export const DaffCartPaymentMethodsDriver 
  = new InjectionToken<DaffCartPaymentMethodsServiceInterface>('DaffCartPaymentMethodsDriver');
