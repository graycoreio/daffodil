import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignNativeSelectExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-native-select',
    component: () => import('./basic-native-select/basic-native-select.component').then(c => c.BasicNativeSelectExampleComponent),
  },
  {
    id: 'native-select-disabled',
    component: () => import('./native-select-disabled/native-select-disabled.component').then(c => c.NativeSelectDisabledExampleComponent),
  },
  {
    id: 'native-select-error',
    component: () => import('./native-select-error/native-select-error.component').then(c => c.NativeSelectErrorExampleComponent),
  },
  {
    id: 'native-select-hint',
    component: () => import('./native-select-hint/native-select-hint.component').then(c => c.NativeSelectHintExampleComponent),
  },
));

