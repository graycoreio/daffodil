import {
  Injectable,
  Inject,
} from '@angular/core';
import { Actions } from '@ngrx/effects';

import { DaffRestoreableCanonicalService } from '@daffodil/seo';

import { DAFF_SEO_CANONICAL_URL_UPDATES } from '../injection-tokens/public_api';
import { DaffSeoCanonicalUrlUpdate } from '../models/public_api';
import { DaffSeoPageHookEffects } from './page-hook.effects';

/**
 * Page hook effects for the canonical URL.
 */
@Injectable()
export class DaffSeoCanonicalUrlEffects extends DaffSeoPageHookEffects<DaffRestoreableCanonicalService, DaffSeoCanonicalUrlUpdate, string> {
  constructor(
    actions$: Actions,
    @Inject(DAFF_SEO_CANONICAL_URL_UPDATES) updates: DaffSeoCanonicalUrlUpdate[],
    service: DaffRestoreableCanonicalService,
  ) {
    super(
      actions$,
      updates,
      service,
    );
  }
}
