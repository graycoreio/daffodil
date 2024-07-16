import {
  Inject,
  Injectable,
  reflectComponentType,
} from '@angular/core';

import { DAFF_DOCS_EXAMPLE_COMPONENTS } from './token';
import { DaffDocsComponentExample } from './type';

@Injectable()
export class DaffDocsComponentExamples {
  get examples(): ReadonlyMap<string, DaffDocsComponentExample> {
    return this.components.reduce<Map<string, DaffDocsComponentExample>>((acc, component) => {
      acc.set(reflectComponentType(component).selector, component);
      return acc;
    }, new Map());
  }

  constructor(
    @Inject(DAFF_DOCS_EXAMPLE_COMPONENTS) private components: Array<DaffDocsComponentExample>,
  ) {}
}
