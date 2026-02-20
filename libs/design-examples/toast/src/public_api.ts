import { CustomDurationToastExampleComponent } from './custom-duration-toast/custom-duration-toast.component';
import { DefaultToastExampleComponent } from './default-toast/default-toast.component';
import { DismissibleToastExampleComponent } from './dismissible-toast/dismissible-toast.component';
import { ToastStatusExampleComponent } from './toast-status/toast-status.component';

export const TOAST_EXAMPLES = [
  DefaultToastExampleComponent,
  ToastStatusExampleComponent,
  CustomDurationToastExampleComponent,
  DismissibleToastExampleComponent,
];
export { provideDaffDesignToastExamplesContent } from './provider';
