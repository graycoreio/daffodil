import { ContentChild } from '@angular/core';
import { DaffPrefixDirective } from '../prefix.directive';
import { Constructor } from '../../constructor';


/**
 * A mixin for giving a form control component a prefixed symbol.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffPrefixableMixin<T extends Constructor>(Base: T) {
  class Prefixable extends Base {

    @ContentChild(DaffPrefixDirective, { static: true}) _prefix: DaffPrefixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return Prefixable;
}
