import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 *
 * Prefix can be used to place content before another piece of content in components like
 * `daff-form-field`, `daff-solo-field`, and `daff-list`.
 */
@Directive({
  selector: '[daffPrefix]',
  standalone: false,
})

export class DaffPrefixDirective {

  @HostBinding('class.daff-prefix') class = true;
}
