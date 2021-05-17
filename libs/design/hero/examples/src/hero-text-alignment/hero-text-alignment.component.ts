import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-text-alignment',
  templateUrl: './hero-text-alignment.component.html',
})
export class HeroTextAlignmentComponent {
  textAlignControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ];
}
