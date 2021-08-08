import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffSeoRestoreableServiceInterface } from '../models/public_api';

const CSS_SELECTOR = 'link[rel="canonical"]';

/**
 * @inheritdoc
 */
// TODO(damienwebdev): fix document type and remove casts in Angular 13
@Injectable({
  providedIn: 'root',
})
export class DaffRestoreableCanonicalService implements DaffSeoRestoreableServiceInterface<string, string> {
  private _upsertCache: string;
  private _restoreCache: string;

  private get _documentHead(): HTMLHeadElement {
    return (<Document>this.document).head;
  }

  get upsertCache(): string {
    return this._upsertCache;
  }

  get restoreCache(): string {
    return this._restoreCache;
  }

  /**
   * The canonical link element.
   */
  get canonicalLink(): HTMLLinkElement {
    return this._documentHead.querySelector<HTMLLinkElement>(CSS_SELECTOR);
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {}

  upsert(url: string): void {
    if (!url) {
      return;
    }

    const el = this.canonicalLink;

    if (el) {
      el.setAttribute('href', url);
    } else {
      const link = (<Document>this.document).createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this._documentHead.appendChild(link);
    }

    this._upsertCache = url;
  }

  clear(): void {
    const el = this.canonicalLink;

    if (el) {
      this._documentHead.removeChild(el);
    }

    this._restoreCache = this._upsertCache;
    this._upsertCache = null;
  }

  restore(): void {
    if (this._restoreCache) {
      this.upsert(this._restoreCache);
    }

    this.emptyRestoreCache();
  }

  emptyRestoreCache(): void {
    this._restoreCache = null;
  }
}
