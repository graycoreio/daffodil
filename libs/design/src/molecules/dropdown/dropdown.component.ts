import { DOCUMENT } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  HostBinding,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  Renderer2,
  Inject,
} from '@angular/core';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffSkeletonable,
  daffSkeletonableMixin,
} from '../../core/skeletonable/public_api';
import {
  daffDropdownAnimations,
  DaffDropdownAnimationState,
} from './animation/dropdown-animation';
import { getAnimationState } from './animation/dropdown-animation-state';

class _base {
  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer2,
  ) {}
}

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
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['skeleton'],
})
export class DaffDropdownComponent extends daffSkeletonableMixin(_base) implements OnInit, DaffSkeletonable {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  private _open = false;
  private _animationState: DaffDropdownAnimationState;

  @Input() tabIndex: number;
  @Input() disabled = false;

  @HostBinding('class.daff-dropdown') class = true;

  @HostBinding('class.daff-dropdown--open') get openClass() {
    return this._open ? true : false;
  }

  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled;
  }

  get isOpen(): boolean {
    return this._open;
  }

  get animationState() {
    return this._animationState;
  }

  constructor(
    private cd: ChangeDetectorRef,
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Inject(DOCUMENT) private document: any,
  ) {
    super(_elementRef, _renderer);
  }

  ngOnInit() {
	  this._animationState = getAnimationState(this._open);
    (<Document>this.document).addEventListener('click', (evt) => {
      if (this._open) {
        this.toggle();
      }
    });
  }

  toggle(event?: KeyboardEvent | MouseEvent) {
	  if (event) {
	    event.preventDefault();
      event.stopPropagation();
	  }
	  this._open = !this._open;
	  this._animationState = getAnimationState(this._open);

	  this.cd.markForCheck();
  }
}
