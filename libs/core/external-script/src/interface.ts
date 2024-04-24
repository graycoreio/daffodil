import { Observable } from 'rxjs';

import { DaffExternalScript } from './script';

export interface DaffExternalScriptServiceInterface {

  /**
   * Load a script into the document.
   * @param name The name of the script.
   * @param script The script object containing details like src, async, defer, and custom attributes.
   * @returns An Observable that emits true when the script is loaded successfully, or emits an error if loading fails.
   */
  load(name: string, script: DaffExternalScript): Observable<boolean>;
}
