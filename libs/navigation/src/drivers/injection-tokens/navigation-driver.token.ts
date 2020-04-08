import { InjectionToken } from '@angular/core';

import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';

export const DaffNavigationDriver = 
  new InjectionToken<DaffNavigationServiceInterface<any>>('DaffNavigationDriver');
