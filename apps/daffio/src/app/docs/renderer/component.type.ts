import { InputSignal } from '@angular/core';

import { DaffDoc } from '@daffodil/docs-utils';

export interface DaffioDocComponent<T extends DaffDoc = DaffDoc> {
  doc: InputSignal<T>;
}
