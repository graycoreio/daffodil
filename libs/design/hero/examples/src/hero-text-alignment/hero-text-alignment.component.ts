import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-text-alignment',
  templateUrl: './hero-text-alignment.component.html',
  styleUrls: ['./hero-text-alignment.component.scss'],
})
export class HeroTextAlignmentComponent {
  faMobile = faMobile;
  textAlignControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ];
}
