import {
  ContentChild,
  Directive,
} from '@angular/core';

import { Constructor } from '../../../core/public_api';
import { DaffPrefixDirective } from '../prefix.directive';

/**
 * A mixin for giving a component the ability to place content before another piece of content.
 */
export function daffPrefixableMixin<T extends Constructor>(Base: T) {
  @Directive()
  class PrefixableDirective extends Base {

    @ContentChild(DaffPrefixDirective, { static: true }) _prefix: DaffPrefixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return PrefixableDirective;
}
