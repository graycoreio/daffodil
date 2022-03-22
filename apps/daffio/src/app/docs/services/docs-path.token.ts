import { InjectionToken } from '@angular/core';

export const DAFFIO_DOCS_PATH_TOKEN = new InjectionToken<string>('DAFFIO_DOCS_PATH_TOKEN', {
  factory: () => '/assets/daffio/docs/',
});
