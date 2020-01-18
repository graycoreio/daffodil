import { InjectionToken } from '@angular/core';
import { DaffCartTransformerInterface } from '../interfaces/cart-transformer.interface';
import { DaffCart } from '../../models/cart';

export const DaffCartTransformer = new InjectionToken<DaffCartTransformerInterface<DaffCart>>('DaffCartTransformer');
