import { ComponentExample } from '@daffodil/design';

import { DefaultToastComponent } from './default-toast/default-toast.component';
import { DefaultToastModule } from './default-toast/default-toast.module';
import { ToastStatusComponent } from './toast-status/toast-status.component';
import { ToastStatusModule } from './toast-status/toast-status.module';

export const TOAST_EXAMPLES: ComponentExample[] = [
  { component: DefaultToastComponent, module: DefaultToastModule },
  { component: ToastStatusComponent, module: ToastStatusModule },
];