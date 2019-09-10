import { InjectionToken } from '@angular/core';

import { DaffNavigationTransformerInterface } from '../interfaces/navigation-transformer.interface';
import { DaffNavigationTreeUnion } from '../../models/navigation-tree-union';

export const DaffNavigationTransformer = 
  new InjectionToken<DaffNavigationTransformerInterface<DaffNavigationTreeUnion>>('DaffNavigationTransformer');
