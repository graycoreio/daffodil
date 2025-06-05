import { InputSignal } from '@angular/core';

import { DaffBaseDoc } from '@daffodil/docs-utils';

export interface DaffioDocsDynamicContent<T extends DaffBaseDoc = DaffBaseDoc> {
  doc: InputSignal<T>;
}
