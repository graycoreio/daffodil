import { DaffViewportBackdropComponent } from './backdrop/backdrop.component';
import { DaffViewportComponent } from './viewport.component';

export { DaffViewportComponent } from './viewport.component';
export { DaffViewportBackdropComponent } from './backdrop/backdrop.component';
export { DaffViewportService } from './service/viewport-service';
export { provideDaffViewport } from './providers/provide-viewport';

/**
 * @docs-private
 */
export const DAFF_VIEWPORT_COMPONENTS = <const> [
  DaffViewportComponent,
  DaffViewportBackdropComponent,
];
