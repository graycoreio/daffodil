import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffPaypalServiceInterface } from '../interfaces/paypal-service.interface';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { DaffPaypalTransformerInterface } from '../interfaces/paypal-transformer.interface';
import { GenerateTokenMutation } from './mutations/generate-token';
import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { MagentoPaypalTokenResponse } from './models/response/magento-paypal-token-response';
import { DaffMagentoPaypalConfig } from './models/config';
import { DaffPaypalConfig } from '../injection-tokens/paypal-config.token';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoPaypalService implements DaffPaypalServiceInterface {
  
  constructor(
    private apollo: Apollo,
		@Inject(DaffPaypalTransformer) private transformer: DaffPaypalTransformerInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse>,
		@Inject(DaffPaypalConfig) private config: DaffMagentoPaypalConfig
	) {}

  generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse> {
    return this.apollo.mutate<MagentoPaypalTokenResponse>({
      mutation: GenerateTokenMutation,
      variables: {
        input: this.transformer.transformOut(tokenRequest, this.config)
      }
    }).pipe(
      map(result => {
				return this.transformer.transformIn(result.data.createPaypalExpressToken)
			})
    );
  }
}
