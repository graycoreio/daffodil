import { isDevMode } from '@angular/core';

import { daffAutoDriverErrorMessage } from '@daffodil/driver';

const MESSAGE = daffAutoDriverErrorMessage('external-router');

if (isDevMode()) {
  throw new Error(MESSAGE);
} else {
  console.error(MESSAGE);
}

export {};
