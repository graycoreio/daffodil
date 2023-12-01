import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  HostBinding,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  daffDropdownAnimations,
  DaffDropdownAnimationState,
} from './animation/dropdown-animation';
import { getAnimationState } from './animation/dropdown-animation-state';

/**
 * DaffDropdownComponent provides a way to display content in an expandable view.
 */
@Component({
  selector: 'daff-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffDropdownAnimations.openDropdown,
  ],
})
export class DaffDropdownComponent implements OnInit {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  _open = false;
  _animationState: DaffDropdownAnimationState;

  @Input() tabIndex: number;
  @Input() disabled = false;

  @HostBinding('class.daff-dropdown') class = true;

  @HostBinding('class.daff-dropdown--open') get openClass() {
    return this._open ? true : false;
  }

  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled;
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
	  this._animationState = getAnimationState(this._open);
  }

  toggle(event?: KeyboardEvent | MouseEvent) {
	  if (event) {
	    event.preventDefault();
	  }
	  this._open = !this._open;
	  this._animationState = getAnimationState(this._open);

	  this.cd.markForCheck();
  }
}
