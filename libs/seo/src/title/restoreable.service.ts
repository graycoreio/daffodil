import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DaffSeoRestoreableServiceInterface } from '../models/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRestoreableTitleService implements DaffSeoRestoreableServiceInterface<string, string> {
  private _upsertCache: string;
  private _restoreCache: string;

  get upsertCache(): string {
    return this._upsertCache;
  }

  get restoreCache(): string {
    return this._restoreCache;
  }

  constructor(
    private title: Title,
  ) {}

  upsert(title: string): void {
    if (!title) {
      return;
    }

    this.title.setTitle(title);

    this._upsertCache = title;
  }

  clear(): void {
    this.title.setTitle('');

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
