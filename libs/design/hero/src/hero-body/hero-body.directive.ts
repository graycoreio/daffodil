/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Body is a flexible wrapper for additional components or custom layouts.
 * It's unstyled except for spacing, allowing for a ton of control and customization.
 * It should only be used once per hero.
 *
 * @example
 * ```html
 * <div daffHeroBody>Custom content</div>
 * ```
 */
@Directive({
  selector: '[daffHeroBody]',
  host: {
    'class': 'daff-hero__body',
  },
})

export class DaffHeroBodyDirective {}
