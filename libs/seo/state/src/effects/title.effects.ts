import {
  Injectable,
  Inject,
} from '@angular/core';
import { Actions } from '@ngrx/effects';

import { DaffRestoreableTitleService } from '@daffodil/seo';

import { DAFF_SEO_TITLE_UPDATES } from '../injection-tokens/public_api';
import { DaffSeoTitleUpdate } from '../models/public_api';
import { DaffSeoPageHookEffects } from './page-hook.effects';

/**
 * Page hook effects for the page title.
 */
@Injectable()
export class DaffSeoTitleEffects extends DaffSeoPageHookEffects<DaffRestoreableTitleService, DaffSeoTitleUpdate, string> {
  constructor(
    actions$: Actions,
    @Inject(DAFF_SEO_TITLE_UPDATES) updates: DaffSeoTitleUpdate[],
    service: DaffRestoreableTitleService,
  ) {
    super(
      actions$,
      updates,
      service,
    );
  }
}
