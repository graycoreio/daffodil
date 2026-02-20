import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignToastExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'custom-duration-toast',
    component: () => import('./custom-duration-toast/custom-duration-toast.component').then(c => c.CustomDurationToastExampleComponent),
  },
  {
    id: 'default-toast',
    component: () => import('./default-toast/default-toast.component').then(c => c.DefaultToastExampleComponent),
  },
  {
    id: 'dismissible-toast',
    component: () => import('./dismissible-toast/dismissible-toast.component').then(c => c.DismissibleToastExampleComponent),
  },
  {
    id: 'toast-status',
    component: () => import('./toast-status/toast-status.component').then(c => c.ToastStatusExampleComponent),
  },
));

