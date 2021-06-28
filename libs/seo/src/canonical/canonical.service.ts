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
@Injectable()
export class DaffCanonicalService implements DaffCanonicalServiceInterface {
  get canonicalLink(): HTMLLinkElement {
    return this.documentHead.querySelector<HTMLLinkElement>(CSS_SELECTOR);
  }

  get documentHead(): HTMLHeadElement {
    return (<Document>this.document).head;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {}

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
  }

  remove(): void {
    const el = this.canonicalLink;

    if (el) {
      this.documentHead.removeChild(el);
    }
  }
}
