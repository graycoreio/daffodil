import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicImageComponent } from './basic-image/basic-image.component';
import { LoadImageComponent } from './load-image/load-image.component';
import { SkeletonImageComponent } from './skeleton-image/skeleton-image.component';


export const IMAGE_EXAMPLES = [
  BasicImageComponent,
  LoadImageComponent,
  SkeletonImageComponent,
];

export const provideDaffDesignImageExamples = () =>
  provideDaffDocsExampleComponents(...IMAGE_EXAMPLES);
