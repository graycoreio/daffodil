import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.document.addEventListener('scroll', () => {
      if (!this._ticking) {
        this.document.defaultView.requestAnimationFrame(() => {
          this._fragment.next([...document.querySelectorAll(HEADER_WITH_ID_SELECTOR)].find(el => {
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom >= 0;
          })?.getAttribute('id'));
          this._ticking = false;
        });

        this._ticking = true;
      }
    });
  }
}
