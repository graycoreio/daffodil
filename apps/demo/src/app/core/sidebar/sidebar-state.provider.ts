import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';

export const provideDemoSidebarState = () =>
  importProvidersFrom(
    StoreModule.forFeature('demoSidebar', reducers),
  );
