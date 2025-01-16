import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'container-sizes',
  templateUrl: './container-sizes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class ContainerSizesComponent {
  sizeControl: UntypedFormControl = new UntypedFormControl('xs');

  options = [
    { value: 'xs', label: 'Extra Small' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
  ];
}
