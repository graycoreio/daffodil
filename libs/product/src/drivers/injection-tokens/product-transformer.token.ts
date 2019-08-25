import { InjectionToken } from '@angular/core';
import { DaffProductTransformerInterface } from '../interfaces/product-transformer.interface';
import { DaffProductUnion } from '../../models/product-union';

export const DaffProductTransformer = 
    new InjectionToken<DaffProductTransformerInterface<DaffProductUnion>>('DaffProductTransformer');
