import { InjectionToken } from '@angular/core';

import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';

export interface DaffPaypalTransformerInterface<
  T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest,
  V extends DaffPaypalTokenResponse = DaffPaypalTokenResponse
> {
  transformOut(tokenRequest: T, config?: any): any;
  transformIn(tokenResponse: any): V;
}

export const DaffPaypalTransformer = new InjectionToken<DaffPaypalTransformerInterface>('DaffPaypalTransformer');
