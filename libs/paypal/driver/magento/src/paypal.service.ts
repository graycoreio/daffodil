import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from '@damienwebdev/apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';
import {
  DaffPaypalServiceInterface,
  DaffPaypalTransformer,
  DaffPaypalTransformerInterface,
  DaffPaypalConfig,
} from '@daffodil/paypal/driver';

import {
  DaffMagentoPaypalConfig,
  MagentoPaypalTokenResponse,
} from './models/public_api';
import { GenerateTokenMutation } from './mutations/generate-token';

/**
 * @inheritdoc
 */
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
