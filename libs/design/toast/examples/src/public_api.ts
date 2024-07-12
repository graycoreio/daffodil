import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { DefaultToastComponent } from './default-toast/default-toast.component';
import { ToastPositionsComponent } from './toast-positions/toast-positions.component';
import { ToastStatusComponent } from './toast-status/toast-status.component';
import { ToastWithCustomDurationComponent } from './toast-with-custom-duration/toast-with-custom-duration.component';


export const TOAST_EXAMPLES = [
  DefaultToastComponent,
  ToastPositionsComponent,
  ToastStatusComponent,
  ToastWithCustomDurationComponent,
];

export const provideDaffDesignToastExamples = () =>
  provideDaffDocsExampleComponents(...TOAST_EXAMPLES);
