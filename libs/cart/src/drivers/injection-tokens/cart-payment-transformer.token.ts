import { InjectionToken } from '@angular/core';
import { DaffCartPaymentTransformerInterface } from '../interfaces/cart-payment-transformer.interface';
import { DaffCartPayment } from '../../models/cart-payment';

export const DaffCartPaymentTransformer = new InjectionToken<DaffCartPaymentTransformerInterface<DaffCartPayment>>('DaffCartPaymentTransformer');
