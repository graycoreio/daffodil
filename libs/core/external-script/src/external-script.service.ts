import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
} from 'rxjs';
import { filter } from 'rxjs/operators';

import { DaffExternalScriptServiceInterface } from './interface';
import { DaffExternalScript } from './script';

export interface LoadedExternalScript extends DaffExternalScript {
  ready: boolean | undefined;
  subject: Observable<boolean>;
  el: HTMLElement | undefined;
}

/**
 * A service for loading external scripts into the document.
 *
 * ### Usage example
 *
 * @example Loading an external script into the document
 *
 * ```ts
 * import { DOCUMENT } from '@angular/common';
 * import { inject } from '@angular/core';
 *
 * import { DaffExternalScriptService } from '@daffodil/core/external-script';
 *
 * const externalScriptService = new DaffExternalScriptService(inject(DOCUMENT));
 *
 * externalScriptService.load('exampleScript', {
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
export class DaffExternalScriptService implements DaffExternalScriptServiceInterface {
  readonly scriptMap: Map<string, LoadedExternalScript> = new Map();
  private doc: Document;

  constructor(
    @Inject(DOCUMENT) doc,
  ) {
    this.doc = doc;
  }

  /**
   * @inheritdoc
   */
  load(name: string, script: DaffExternalScript): Observable<boolean> {
    // Don't load the same script twice.
    if(this.scriptMap.has(name)){
      return this.scriptMap.get(name).subject;
    }

    const scriptEl = this.doc.createElement('script');

    scriptEl.setAttribute('type', 'text/javascript');

    scriptEl.setAttribute('src', script.src);

    scriptEl.setAttribute('charset', 'utf-8');

    // Set custom attributes prefixed with 'data-'.
    Object.keys(script).filter(key => key.startsWith('data-')).map((key) => {
      // setAttribute would lowercase the value of "key", which isn't always correct.
      // setAttributeNS maintains key casing.
      scriptEl.setAttributeNS(null, key,script[key]);
    });

    if(script.async) {
      scriptEl.async = true;
    }

    if(script.defer) {
      scriptEl.defer = true;
    }

    const readySubject = new BehaviorSubject<boolean | undefined>(undefined);

    scriptEl.onload = () => {
      this.scriptMap.get(name).ready = true;
      readySubject.next(true);
    };

    scriptEl.onerror = () => {
      this.scriptMap.get(name).ready = false;
      readySubject.error(new Error(`Failed to load ${ script.src }`));
    };

    this.doc.body.appendChild(scriptEl);
    this.scriptMap.set(name, { ...script, ready: undefined, subject: readySubject, el: scriptEl });

    return readySubject.pipe(
      filter((s) => s !== undefined),
    );
  }
}
