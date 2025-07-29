/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffProgressBarLabel]',
  host: {
    'class': 'daff-progress-bar__label',
  },
})
export class DaffProgressBarLabelDirective {}
