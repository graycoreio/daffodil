import { Provider } from '@angular/core';

import { DaffViewportService } from '../services/viewport.service';

/**
 * @docs-private
 *
 * Provides the `DaffViewportService` for a component and any `<daff-viewport>`
 * rendered within its template. Add it to the `providers` of the component that
 * hosts a `<daff-viewport>` so that the host and the viewport share the same
 * viewport state.
 *
 * @example
 * ```ts
 * @Component({
 *   ...
 *   providers: [provideDaffViewport()],
 * })
 * export class MyComponent {
 *   constructor(private viewportService: DaffViewportService) {}
 * }
 * ```
 */
export const provideDaffViewport = (): Provider[] => [
  DaffViewportService,
];
