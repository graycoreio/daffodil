import { ComponentExample } from '@daffodil/design';

import { BasicImageComponent } from './basic-image/basic-image.component';
import { BasicImageModule } from './basic-image/basic-image.module';
import { LoadImageComponent } from './load-image/load-image.component';
import { LoadImageModule } from './load-image/load-image.module';

export const IMAGE_EXAMPLES: ComponentExample[] = [
  { component: BasicImageComponent, module: BasicImageModule },
  { component: LoadImageComponent, module: LoadImageModule}
];
