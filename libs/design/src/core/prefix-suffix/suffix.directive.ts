import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 *
 * Prefix can be used to place content after another piece of content in components like
 * `daff-form-field`, `daff-solo-field`, and `daff-list`.
 */
@Directive({
  selector: '[daffSuffix]',
  standalone: false,
})

export class DaffSuffixDirective {

  @HostBinding('class.daff-suffix') class = true;
}
