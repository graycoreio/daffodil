import { Provider } from '@angular/core';

import { DaffToastPositionService } from '../service/position.service';
import { DaffToastService } from '../service/toast.service';

export const daffProvideToast = (): Provider[] => [
  DaffToastService,
  DaffToastPositionService,
];
