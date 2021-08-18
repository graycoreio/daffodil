import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { DaffSeoMetaDefinition } from '../models/public_api';
import { getAttrSelector } from './get-attr-selector';

/**
 * Manages the meta tags on the current browser page.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMetaService {
  constructor(
    private meta: Meta,
  ) {}

  /**
   * Updates or inserts, as needed, a meta tag to the page.
   *
   * @param def the meta definition
   */
  upsert(def: DaffSeoMetaDefinition): void {
    this.meta.updateTag(def);
  }

  /**
   * Removes the specified meta tag from the page.
   *
   * @param def the meta definition
   */
  remove(def: DaffSeoMetaDefinition): void {
    this.meta.removeTag(getAttrSelector(def));
  }
}
