import { ComponentExample } from '@daffodil/design';

import { MenuWithComponentComponent } from './menu-with-component/menu-with-component.component';
import { MenuWithComponentModule } from './menu-with-component/menu-with-component.module';
import { MenuWithTemplateComponent } from './menu-with-template/menu-with-template.component';
import { MenuWithTemplateModule } from './menu-with-template/menu-with-template.module';

export const MENU_EXAMPLES: ComponentExample[] = [
  { component: MenuWithTemplateComponent, module: MenuWithTemplateModule },
  { component: MenuWithComponentComponent, module: MenuWithComponentModule },
];
