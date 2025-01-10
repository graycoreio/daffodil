import { InputSignal } from '@angular/core';

import { DaffDoc } from '@daffodil/docs-utils';

export interface DaffioDocsDynamicallyRenderableContent<T extends DaffDoc = DaffDoc> {
  doc: InputSignal<T>;
}
