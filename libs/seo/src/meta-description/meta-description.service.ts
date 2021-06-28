import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffMetaDescriptionServiceInterface } from './meta-description.interface';

const CSS_SELECTOR = 'meta[name="description"]';

/**
 * @inheritdoc
 */
@Injectable()
export class DaffMetaDescriptionService implements DaffMetaDescriptionServiceInterface {
  get metaDescriptionTag(): HTMLLinkElement {
    return this.documentHead.querySelector<HTMLLinkElement>(CSS_SELECTOR);
  }

  get documentHead(): HTMLHeadElement {
    return this.document.head;
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {}

  upsert(content: string): void {
    const el = this.metaDescriptionTag;

    if (el) {
      el.setAttribute('content', content);
    } else {
      const meta = (<Document>this.document).createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', content);
      this.documentHead.appendChild(meta);
    }
  }

  remove(): void {
    const el = this.metaDescriptionTag;

    if (el) {
      this.documentHead.removeChild(el);
    }
  }
}
