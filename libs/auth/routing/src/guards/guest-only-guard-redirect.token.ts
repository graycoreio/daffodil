import { InjectionToken } from '@angular/core';

export const DaffAuthGuestOnlyGuardRedirectUrl = new InjectionToken<string>('DaffAuthGuestOnlyGuardRedirectUrl', { factory: () => '/' });
