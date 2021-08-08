import { Injectable } from '@angular/core';
import {
  Meta,
  MetaDefinition,
} from '@angular/platform-browser';

import { DaffSeoMetaDefinition } from '../models/public_api';
import { getAttrSelector } from './get-attr-selector';

interface Subtype {
  name: string;
  content: string;
}

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMetaService {
  constructor(
    private meta: Meta,
  ) {}

  upsert(def: DaffSeoMetaDefinition): void {
    this.meta.updateTag(def);
  }

  remove(def: DaffSeoMetaDefinition): void {
    this.meta.removeTag(getAttrSelector(def));
  }
}
