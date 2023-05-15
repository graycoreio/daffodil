import { ComponentExample } from '@daffodil/design';

import { BasicImageComponent } from './basic-image/basic-image.component';
import { BasicImageModule } from './basic-image/basic-image.module';
import { LoadImageComponent } from './load-image/load-image.component';
import { LoadImageModule } from './load-image/load-image.module';
import { SkeletonImageComponent } from './skeleton-image/skeleton-image.component';
import { SkeletonImageModule } from './skeleton-image/skeleton-image.module';

export const IMAGE_EXAMPLES: ComponentExample[] = [
  { component: BasicImageComponent, module: BasicImageModule },
  { component: LoadImageComponent, module: LoadImageModule },
  { component: SkeletonImageComponent, module: SkeletonImageModule },
];
