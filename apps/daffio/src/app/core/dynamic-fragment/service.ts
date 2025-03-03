import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const HEADER_WITH_ID_SELECTOR = 'h1[id],h2[id],h3[id],h4[id],h5[id]';

@Injectable()
export class DaffioActiveHeaderService {
  /**
   * True when
   */
  private _ticking = false;
  private _fragment = new BehaviorSubject<string | null>(null);

  readonly fragment$ = this._fragment.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.document.addEventListener('scroll', () => {
      if (!this._ticking) {
        this.document.defaultView.requestAnimationFrame(() => {
          const fragment = [...document.querySelectorAll(HEADER_WITH_ID_SELECTOR)].find(el => {
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom >= 0;
          })?.getAttribute('id');
          if (fragment) {
            this._fragment.next(fragment);
          }
          this._ticking = false;
        });

        this._ticking = true;
      }
    });
  }
}
