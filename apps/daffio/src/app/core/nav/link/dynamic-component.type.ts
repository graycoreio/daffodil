import { InputSignal } from '@angular/core';

export interface DaffioNavLinkDynamicComponent {
  type: InputSignal<'header' | 'list'>;
}
