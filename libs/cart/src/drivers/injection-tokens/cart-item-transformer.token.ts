import { InjectionToken } from '@angular/core';
import { DaffCartItemTransformerInterface } from '../interfaces/cart-item-transformer.interface';
import { DaffCartItem } from '../../models/cart-item';

export const DaffCartItemTransformer = new InjectionToken<DaffCartItemTransformerInterface<DaffCartItem>>('DaffCartItemTransformer');
