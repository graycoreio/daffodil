import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';
import { DaffPaypalConfig } from '../injection-tokens/paypal-config.token';
import { DaffPaypalTransformer } from '../injection-tokens/paypal-transformer.token';
import { DaffPaypalServiceInterface } from '../interfaces/paypal-service.interface';
import { DaffPaypalTransformerInterface } from '../interfaces/paypal-transformer.interface';
import { DaffMagentoPaypalConfig } from './models/config';
import { MagentoPaypalTokenResponse } from './models/response/magento-paypal-token-response';
import { GenerateTokenMutation } from './mutations/generate-token';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoPaypalService implements DaffPaypalServiceInterface {

  constructor(
    private apollo: Apollo,
		@Inject(DaffPaypalTransformer) private transformer: DaffPaypalTransformerInterface<DaffPaypalTokenRequest, DaffPaypalTokenResponse>,
		@Inject(DaffPaypalConfig) private config: DaffMagentoPaypalConfig,
  ) {}

  generateToken(tokenRequest: DaffPaypalTokenRequest): Observable<DaffPaypalTokenResponse> {
    return this.apollo.mutate<MagentoPaypalTokenResponse>({
      mutation: GenerateTokenMutation,
      variables: {
        input: this.transformer.transformOut(tokenRequest, this.config),
      },
    }).pipe(
      map(result => this.transformer.transformIn(result.data.createPaypalExpressToken)),
    );
  }
}
