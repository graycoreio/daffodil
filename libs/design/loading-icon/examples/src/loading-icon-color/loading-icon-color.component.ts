import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading-icon-color',
  templateUrl: './loading-icon-color.component.html'
})
export class LoadingIconColorComponent {
  colorGroup = new FormGroup({
    color: new FormControl('primary')
  });
}
