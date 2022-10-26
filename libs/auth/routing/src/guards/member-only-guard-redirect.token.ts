import { InjectionToken } from '@angular/core';

export const DaffAuthMemberOnlyGuardRedirectUrl = new InjectionToken<string>('DaffAuthMemberOnlyGuardRedirectUrl', { factory: () => '/' });
