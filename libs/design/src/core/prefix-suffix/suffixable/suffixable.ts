import {
  ContentChild,
  Directive,
} from '@angular/core';

import { Constructor } from '../../../core/public_api';
import { DaffSuffixDirective } from '../suffix.directive';

/**
 * A mixin for giving a component the ability to place content after another piece of content.
 */
export function daffSuffixableMixin<T extends Constructor>(Base: T) {
  @Directive()
  class SuffixableDirective extends Base {

    @ContentChild(DaffSuffixDirective, { static: true }) _suffix: DaffSuffixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return SuffixableDirective;
}
