import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Type,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { DaffioNavLinkDynamicComponent } from './dynamic-component.type';
import { DaffioNavLink } from './type';
import { DaffioHeaderItemDirective } from '../../header/components/header-item/header-item.directive';
import { isComponent } from '../../utils/is-component';

@Component({
  selector: 'daffio-nav-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHeaderItemDirective,
    RouterLink,
    RouterLinkActive,
    NgComponentOutlet,
  ],
})
export class DaffioNavLinkComponent {
  readonly isComponent = isComponent;

  link = input.required<DaffioNavLink | Type<DaffioNavLinkDynamicComponent>>();
  type = input<'header' | 'list'>('header');
}
