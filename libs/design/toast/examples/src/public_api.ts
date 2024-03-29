import { ComponentExample } from '@daffodil/design';

import { DefaultToastComponent } from './default-toast/default-toast.component';
import { DefaultToastModule } from './default-toast/default-toast.module';
import { ToastPositionsComponent } from './toast-positions/toast-positions.component';
import { ToastPositionsModule } from './toast-positions/toast-positions.module';
import { ToastStatusComponent } from './toast-status/toast-status.component';
import { ToastStatusModule } from './toast-status/toast-status.module';
import { ToastWithCustomDurationComponent } from './toast-with-custom-duration/toast-with-custom-duration.component';
import { ToastWithCustomDurationModule } from './toast-with-custom-duration/toast-with-custom-duration.module';

export const TOAST_EXAMPLES: ComponentExample[] = [
  { component: DefaultToastComponent, module: DefaultToastModule },
  { component: ToastStatusComponent, module: ToastStatusModule },
  { component: ToastPositionsComponent, module: ToastPositionsModule },
  { component: ToastWithCustomDurationComponent, module: ToastWithCustomDurationModule },
];
