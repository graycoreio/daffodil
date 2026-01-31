import { importProvidersFrom } from '@angular/core';

import { DaffNewsletterStateModule } from '@daffodil/newsletter/state';

export const provideDemoNewsletterState = () =>
  importProvidersFrom(
    DaffNewsletterStateModule,
  );
