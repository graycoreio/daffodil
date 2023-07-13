import {
  NgModule,
  inject,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';
import { DaffCartStorageService } from '@daffodil/cart';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffCartCustomerAuthEffects,
    ]),
  ],
  providers: [
    {
      provide: DAFF_AUTH_UNAUTHENTICATED_HOOKS,
      useFactory: () => {
        const storage = inject(DaffCartStorageService);
        return () => {
          try {
            storage.removeCartId();
          } catch {}
        };
      },
      multi: true,
    },
  ],
})
export class DaffCartCustomerStateModule {}
