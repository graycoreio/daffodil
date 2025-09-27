
import {
  Inject,
  Injectable,
  DOCUMENT,
} from '@angular/core';

import { Schema } from './schema';

/**
 * A service for managing JSON-LD schema tags in a document.
 *
 * There is only ever one schema tag per document, multiple
 * schemas can be added by calling `upsert` with an array.
 *
 * The schema data can be found via a `script` tag with
 * the `id` `daff-schema` in the document.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSchemaService<T> {

  private _tag = null;

  readonly selector = 'daff-schema';

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  /**
   * Memoized schema script tag.
   */
  get scriptTag(): HTMLScriptElement | null {
    if(this._tag) {
      return this._tag;
    }
    this._tag = this._document.querySelector('#' + this.selector);
    return this._tag;
  }

  /**
   * The string represenation of the schema.
   *
   * WARNING: This content is comes directly from the DOM. It could contain malicious content,
   * be very careful with what you do with it.
   */
  getSchema(): string {
    return this.scriptTag?.textContent;
  }

  /**
   * Either creates a new schema tag in the document,
   * or updates the existing schema tag in the document.
   */
  upsert(schema: Schema<T>): void {
    if(this.scriptTag) {
      this.scriptTag.textContent = JSON.stringify(schema);
      return;
    }

    const script = this._document.createElement('script');
    script.type = `application/ld+json`;
    script.text = JSON.stringify(schema);
    script.id = this.selector;
    this._document.head.appendChild(script);
  }

  /**
   * Removes the schema from the document.
   */
  remove(): void {
    this.scriptTag?.parentNode.removeChild(this.scriptTag);
    this._tag = null;
  }
}
