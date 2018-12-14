import { Component } from '@angular/core';

@Component({
  selector: '[daff-callout-title]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-callout__title'}
})

export class DaffCalloutTitleComponent {

}