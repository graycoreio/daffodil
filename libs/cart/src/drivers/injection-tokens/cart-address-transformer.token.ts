import { InjectionToken } from '@angular/core';
import { DaffCartAddressTransformerInterface } from '../interfaces/cart-address-transformer.interface';
import { DaffCartAddress } from '../../models/cart-address';

export const DaffCartAddressTransformer = new InjectionToken<DaffCartAddressTransformerInterface<DaffCartAddress>>('DaffCartAddressTransformer');
