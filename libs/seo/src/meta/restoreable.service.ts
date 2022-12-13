import { Injectable } from '@angular/core';



import {
  DaffSeoRestoreableServiceInterface,
  DaffSeoMetaDefinition,
} from '../models/public_api';
import { getAttrSelector } from './get-attr-selector';
import { DaffMetaService } from './meta.service';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRestoreableMetaService implements DaffSeoRestoreableServiceInterface<DaffSeoMetaDefinition, Record<string, DaffSeoMetaDefinition>> {
  /**
   * Accumulates meta defs added by upsert.
   *
   * @docs-private
   */
  private _upsertCache: Record<string, DaffSeoMetaDefinition> = {};

  /**
   * Stores a page's meta tags by definition.
   * This is the cache from which tags will be restored.
   *
   * @docs-private
   */
  private _restoreCache: Record<string, DaffSeoMetaDefinition> = {};

  get upsertCache(): Record<string, DaffSeoMetaDefinition> {
    return this._upsertCache;
  }

  get restoreCache(): Record<string, DaffSeoMetaDefinition> {
    return this._restoreCache;
  }

  constructor(
    private meta: DaffMetaService,
  ) {}

  /**
   * Removes all managed tags from the page and clears upsert cache.
   *
   * @docs-private
   */
  private _clearPage(): void {
    Object.keys(this._upsertCache).forEach(key => {
      this.meta.remove(this._upsertCache[key]);
    });
    this._upsertCache = {};
  }

  upsert(def: DaffSeoMetaDefinition): void {
    this._upsertCache[getAttrSelector(def)] = def;
    this.meta.upsert(def);
  }

  restore(): void {
    this._clearPage();

    Object.keys(this._restoreCache).forEach(key => {
      this.upsert(this._restoreCache[key]);
    });

    this.emptyRestoreCache();
  }

  clear(): void {
    this._restoreCache = this._upsertCache;
    this._clearPage();
  }

  emptyRestoreCache(): void {
    this._restoreCache = {};
  }
}
