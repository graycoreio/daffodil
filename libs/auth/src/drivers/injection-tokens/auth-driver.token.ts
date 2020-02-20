import { InjectionToken } from '@angular/core';

import { DaffAuthServiceInterface } from '../interfaces/auth-service.interface';

export const DaffAuthDriver = new InjectionToken<DaffAuthServiceInterface>('DaffAuthDriver')
