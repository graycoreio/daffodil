import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffCanonicalServiceInterface } from './canonical.interface';

const CSS_SELECTOR = 'link[rel="canonical"]';

/**
 * @inheritdoc
 */
// TODO: fix document type and remove casts
@Injectable({
  providedIn: 'root',
})
export class DaffCanonicalService implements DaffCanonicalServiceInterface {
  private _url: string;

  /**
   * The most recently upserted URL.
   * Is not cleared when the URL is removed.
   */
  get url(): string {
    return this._url;
  }

  /**
   * The canonical link element.
   */
  get canonicalLink(): HTMLLinkElement {
    return this.documentHead.querySelector<HTMLLinkElement>(CSS_SELECTOR);
  }

  private get documentHead(): HTMLHeadElement {
    return (<Document>this.document).head;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {}

  /**
   * Inserts or updates a canonical URL into the document head.
   */
  upsert(url: string): void {
    const el = this.canonicalLink;

    if (el) {
      el.setAttribute('href', url);
    } else {
      const link = (<Document>this.document).createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.documentHead.appendChild(link);
    }

    this._url = url;
  }

  /**
   * Removes the canonical link element from the document head.
   */
  remove(): void {
    const el = this.canonicalLink;

    if (el) {
      this.documentHead.removeChild(el);
    }
  }
}
