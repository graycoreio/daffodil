import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { LoadingIconColorComponent } from './loading-icon-color/loading-icon-color.component';
import { LoadingIconDiameterComponent } from './loading-icon-diameter/loading-icon-diameter.component';



export const LOADING_ICON_EXAMPLES = [
  LoadingIconColorComponent,
  LoadingIconDiameterComponent,
];

export const provideDaffDesignLoadingIconExamples = () =>
  provideDaffDocsExampleComponents(...LOADING_ICON_EXAMPLES);
