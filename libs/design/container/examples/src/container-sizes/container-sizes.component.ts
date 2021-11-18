import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'container-sizes',
  templateUrl: './container-sizes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerSizesComponent {
  sizeControl: FormControl = new FormControl('xs');

  options = [
    { value: 'xs', label: 'Extra Small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
  ];
}
