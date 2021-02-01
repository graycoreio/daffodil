import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading-icon-color',
  templateUrl: './loading-icon-color.component.html',
})
export class LoadingIconColorComponent {
  colorGroup = new FormGroup({
    color: new FormControl('primary'),
  });
}
