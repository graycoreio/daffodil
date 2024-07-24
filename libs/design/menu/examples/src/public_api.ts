import { ComponentExample } from '@daffodil/design';

import { BasicMenuComponent } from './basic-menu/basic-menu.component';
import { BasicMenuComponentModule } from './basic-menu/basic-menu.module';
import { MenuWithTemplateRefComponent } from './menu-with-template-ref/menu-with-template-ref.component';
import { MenuWithTemplateRefComponentModule } from './menu-with-template-ref/menu-with-template-ref.module';

export const MENU_EXAMPLES: ComponentExample[] = [
  { component: BasicMenuComponent, module: BasicMenuComponentModule },
  { component: MenuWithTemplateRefComponent, module: MenuWithTemplateRefComponentModule },
];
