/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

/**
 * A card variant with a stroked (outlined) border instead of a filled background.
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
    'daff-stroked-card' + ',' +
    'a[daff-stroked-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./stroked.component.scss'],
  host: {
    'class': 'daff-stroked-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffStrokedCardComponent extends DaffCardBaseDirective {}
