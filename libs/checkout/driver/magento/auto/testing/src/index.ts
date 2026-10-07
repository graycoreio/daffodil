import { isDevMode } from '@angular/core';

import { daffAutoDriverErrorMessage } from '@daffodil/driver';

const MESSAGE = daffAutoDriverErrorMessage('checkout');

if (isDevMode()) {
  throw new Error(MESSAGE);
} else {
  console.error(MESSAGE);
}

export {};
