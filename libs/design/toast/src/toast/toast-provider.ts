import { Provider } from '@angular/core';

import {
  daffToastDefaultOptions,
  DaffToastOptions,
  provideDaffToastOptions,
} from '../interfaces/toast-options';
import { DaffToastPositionService } from '../service/position.service';
import { DaffToastService } from '../service/toast.service';

/**
 * Registers the `DaffToastService` for displaying a toast. This provider ensures
 * toasts function correctly within your application.
 *
 * ```ts
 * import { provideDaffToast } from '@daffodil/design/toast';
 *
 * @NgModule({
 * 	providers: [
 *    provideDaffToast({
 *      position: {
 *        vertical: 'bottom',
 *        horizontal: 'left',
 *      },
 *    }),
 *  ]
 * )}
 *
 * export class AppModule {}
 * ```
 * @param config Sets the configuration for all toasts.
 * Toasts are displayed in the top-right corner of the screen by default on desktop devices.
 *
 * On mobile devices, toasts will always appear in the bottom-center position,
 * regardless of configuration settings.
 *
 */
export const provideDaffToast = (config: DaffToastOptions = daffToastDefaultOptions): Provider[] => [
  DaffToastService,
  DaffToastPositionService,
  provideDaffToastOptions(config),
];
