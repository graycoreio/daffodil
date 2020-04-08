import { InjectionToken } from '@angular/core';

import { DaffNavigationTransformerInterface } from '../interfaces/navigation-transformer.interface';

export const DaffNavigationTransformer = 
  new InjectionToken<DaffNavigationTransformerInterface<any>>('DaffNavigationTransformer');
