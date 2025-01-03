import { Injectable } from '@angular/core';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import { DaffExternalScriptServiceInterface } from '@daffodil/core/external-script';
import { DaffExternalScript } from '@daffodil/core/external-script';

import { TestScripts } from './constants';

/**
 * A service for loading external scripts into the document.
 *
 * @example Loading an external script into the document
 *
 * ```ts
 * import { DaffExternalScriptTestingService } from '@daffodil/core/external-script/testing';
 *
 * const externalScriptService = new DaffExternalScriptTestingService();
 *
 * externalScriptService.load(TestScripts.SUCCESS, {
 *   src: 'https://example.com/script.js',
 *   async: true,
 *   defer: false,
 *   'data-custom-attribute': 'value',
 * }).subscribe({
 *   next: (result) => {
 *     console.log('Script loaded successfully:', result);
 *   },
 *   error: (error) => {
 *     console.error('Error loading script:', error);
 *   },
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class DaffExternalScriptTestingService implements DaffExternalScriptServiceInterface {

  /**
   * @inheritdoc
   */
  load(name: string, script: DaffExternalScript): Observable<boolean> {
    switch(name) {
      case TestScripts.SUCCESS:
        return of(true);
      default:
        return throwError(() => new Error(`Failed to load ${ script.src }`));
    }
  }
}
