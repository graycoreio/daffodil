import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignSwatchExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-swatch',
    component: () => import('./basic-swatch/basic-swatch.component').then(c => c.BasicSwatchExampleComponent),
  },
  {
    id: 'swatch-sizes',
    component: () => import('./swatch-sizes/swatch-sizes.component').then(c => c.SwatchSizesExampleComponent),
  },
  {
    id: 'swatch-shapes',
    component: () => import('./swatch-shapes/swatch-shapes.component').then(c => c.SwatchShapesExampleComponent),
  },
  {
    id: 'disabled-swatch',
    component: () => import('./disabled-swatch/disabled-swatch.component').then(c => c.DisabledSwatchExampleComponent),
  },
  {
    id: 'swatch-picker',
    component: () => import('./swatch-picker/swatch-picker.component').then(c => c.SwatchPickerExampleComponent),
  },
  {
    id: 'text-swatch',
    component: () => import('./text-swatch/text-swatch.component').then(c => c.TextSwatchExampleComponent),
  },
  {
    id: 'swatch-with-forms',
    component: () => import('./swatch-with-forms/swatch-with-forms.component').then(c => c.SwatchWithFormsExampleComponent),
  },
));
