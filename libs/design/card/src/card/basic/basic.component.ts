/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

/**
 * A basic card variant with a filled background.
 *
 * @example
 * ```html
 * <daff-card>
 * 	<img daffCardImage src="/" alt="image caption" >
 *   <div daffCardIcon></div>
 *   <div daffCardTagline>Card tagline</div>
 *   <h4 daffCardTitle>Card title</h4>
 * 	<div daffCardContent>Detailed information about the subject of the card.</div>
 *   <div daffCardActions>
 *     <button>Card link</button>
 *     <button>Another card link</button>
 *   </div>
 * </daff-card>
 * ```
 */
@Component({
  selector:
    'daff-card' + ',' +
    'a[daff-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./basic.component.scss'],
  host: {
    'class': 'daff-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends DaffCardBaseDirective {}
