import { Type } from '@angular/core';

import { DaffIdentifiable } from '@daffodil/core';

export interface DaffDocsExampleContent extends DaffIdentifiable {
  component: () => Promise<Type<unknown>>;
}
