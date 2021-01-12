import { ContentChild, Directive } from '@angular/core';
import { DaffPrefixDirective } from '../prefix.directive';
import { Constructor } from '../../../core/public_api';

/**
 * A mixin for giving a component the ability to place content before another piece of content.
 */
export function daffPrefixableMixin<T extends Constructor>(Base: T) {
  @Directive()
class Prefixable extends Base {

    @ContentChild(DaffPrefixDirective, { static: true}) _prefix: DaffPrefixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return Prefixable;
}
