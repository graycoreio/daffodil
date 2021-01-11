import { InjectionToken } from '@angular/core';

import { DaffPaypalTransformerInterface } from '../interfaces/paypal-transformer.interface';

export const DaffPaypalTransformer = new InjectionToken<DaffPaypalTransformerInterface>('DaffPaypalTransformer');
