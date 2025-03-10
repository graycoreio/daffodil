import { Provider } from '@angular/core';

import { DaffToastPositionService } from '../service/position.service';
import { DaffToastService } from '../service/toast.service';

/**
 * Registers the `DaffToastService` and `DaffToastPositionService` for displaying a toast. This provider ensures
 * toasts function correctly within your application.
 *
 * ```ts
 * import { provideDaffToast } from '@daffodil/design/toast';
 *
 * @NgModule({
 * 	providers: [
 * 		provideDaffToast(),
 * 	]
 * )}
 *
 * export class AppModule {}
 * ```
 */
export const provideDaffToast = (): Provider[] => [
  DaffToastService,
  DaffToastPositionService,
];
