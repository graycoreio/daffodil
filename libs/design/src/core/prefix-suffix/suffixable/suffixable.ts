import { ContentChild } from '@angular/core';
import { DaffSuffixDirective } from '../suffix.directive';
import { Constructor } from '../../constructor';

/**
 * A mixin for giving a form control component a prefixed symbol.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffSuffixableMixin<T extends Constructor>(Base: T) {
  class Suffixable extends Base {

    @ContentChild(DaffSuffixDirective, { static: true}) _suffix: DaffSuffixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return Suffixable;
}
