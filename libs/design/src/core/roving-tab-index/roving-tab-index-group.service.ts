import {
  DOCUMENT,
  Inject,
  Injectable,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DaffRovingTabIndexService {
  private readonly _hierarchy: Array<string> = [];
  private readonly _group = signal('');

  readonly group = this._group.asReadonly();

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}

  enter(group: string) {
    if (this._group() !== group) {
      this._hierarchy.push(group);
      this._group.set(group);
      const el = this.document.querySelector<HTMLElement>(`[data-rti="${group}"]`);
      if (el) {
        (<HTMLElement>this.document.activeElement).blur();
        el.focus();
      }
    }
  }

  leave() {
    const prev = this._hierarchy.pop();
    if (prev) {
      const group = this._hierarchy[this._hierarchy.length - 1] || '';
      this._group.set(group);
      (<HTMLElement>this.document.activeElement).blur();
      const boundary = this.document.querySelector<HTMLElement>(`[data-rti-boundary="${prev}"][data-rti="${group}"]`);
      if (boundary) {
        boundary.focus();
      } else {
        console.warn(`The boundary for RTI group ${prev} does not have a reference to the parent group ${group}`);
      }
    }
  }

  next() {
    this._changeFocus();
  }

  previous() {
    this._changeFocus(true);
  }

  private _changeFocus(up = false) {
    if (this._group()) {
      const ary = Array.from(this.document.querySelectorAll<HTMLElement>(`[data-rti="${this._group()}"]`));
      const index = ary.findIndex((el) => el === this.document.activeElement);
      (<HTMLElement>this.document.activeElement).blur();
      (up
        ? ary[index === 0 ? ary.length - 1 : index - 1]
        : ary[index === ary.length - 1 ? 0 : index + 1]).focus();
    }
  }
}
