import { InjectionToken } from '@angular/core';
import { DaffCartShippingRateTransformerInterface } from '../interfaces/cart-shipping-rate-transformer.interface';
import { DaffCartShippingRate } from '../../models/cart-shipping-rate';

export const DaffCartShippingRateTransformer = new InjectionToken<DaffCartShippingRateTransformerInterface<DaffCartShippingRate>>('DaffCartShippingRateTransformer');
