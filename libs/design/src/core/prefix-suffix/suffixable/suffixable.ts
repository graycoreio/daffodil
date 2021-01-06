import { ContentChild, Directive } from '@angular/core';
import { DaffSuffixDirective } from '../suffix.directive';
import { Constructor } from '../../../core/public_api';

/**
 * A mixin for giving a component the ability to place content after another piece of content.
 */
export function daffSuffixableMixin<T extends Constructor>(Base: T) {
  @Directive()
class Suffixable extends Base {

    @ContentChild(DaffSuffixDirective, { static: true}) _suffix: DaffSuffixDirective;

    constructor(...args: any[]) {
      super(...args);
    }
  }

  return Suffixable;
}
