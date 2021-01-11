import { InjectionToken } from '@angular/core';

import { DaffPaypalServiceInterface } from '../interfaces/paypal-service.interface';

export const DaffPaypalDriver = new InjectionToken<DaffPaypalServiceInterface>('DaffPaypalDriver');
