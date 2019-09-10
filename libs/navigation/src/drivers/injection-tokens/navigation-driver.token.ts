import { InjectionToken } from '@angular/core';

import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';
import { DaffNavigationTreeUnion } from '../../models/navigation-tree-union';

export const DaffNavigationDriver = 
  new InjectionToken<DaffNavigationServiceInterface<DaffNavigationTreeUnion>>('DaffNavigationDriver');
