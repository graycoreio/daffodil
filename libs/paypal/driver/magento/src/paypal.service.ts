import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressServiceInterface,
  DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG,
  DaffPaypalExpressDriverConfig,
} from '@daffodil/paypal/driver';

import {
  DaffMagentoPaypalConfig,
  MagentoPaypalTokenResponse,
} from './models/public_api';
import { magentoGenerateTokenMutation } from './mutations/generate-token';
import { magentoPaypalExpressResponseTransform } from './transformers/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'any',
})
export class DaffMagentoPaypalService implements DaffPaypalExpressServiceInterface {
  constructor(
    private apollo: Apollo,
    @Inject(DAFF_PAYPAL_EXPRESS_DRIVER_CONFIG) private config: DaffPaypalExpressDriverConfig,
  ) {}

  generateToken(cartId: string, tokenRequest: DaffPaypalExpressTokenRequest): Observable<DaffPaypalExpressTokenResponse> {
    return this.apollo.mutate<MagentoPaypalTokenResponse>({
      mutation: magentoGenerateTokenMutation,
      variables: {
        cartId,
        button: tokenRequest.button,
        returnUrl: this.config.urls.return,
        cancelUrl: this.config.urls.cancel,
      },
    }).pipe(
      map(result => magentoPaypalExpressResponseTransform(result.data)),
    );
  }
}
