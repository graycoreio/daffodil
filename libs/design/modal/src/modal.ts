import { DaffModalActionsComponent } from './modal-actions/modal-actions.component';
import { DaffModalCloseDirective } from './modal-close/modal-close.directive';
import { DaffModalContentComponent } from './modal-content/modal-content.component';
import { DaffModalHeaderComponent } from './modal-header/modal-header.component';
import { DaffModalTitleDirective } from './modal-title/modal-title.directive';

export const DAFF_MODAL_COMPONENTS = <const> [
  DaffModalHeaderComponent,
  DaffModalTitleDirective,
  DaffModalContentComponent,
  DaffModalActionsComponent,
  DaffModalCloseDirective,
];
