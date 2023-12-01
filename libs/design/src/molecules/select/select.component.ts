import {
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
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
  Optional,
  Self,
  ContentChild,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  Subject,
  takeUntil,
} from 'rxjs';

import {
  DaffSkeletonable,
  daffSkeletonableMixin,
} from '../../core/skeletonable/public_api';
import {
  daffSelectAnimations,
  DaffSelectAnimationState,
} from './animation/select-animation';
import { getAnimationState } from './animation/select-animation-state';
import { DaffSelectOptionDirective } from './option/option.directive';

class _base {
  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer2,
  ) {}
}

/**
 * DaffSelectComponent is a form control component that presents a list of selectable options,
 * similar to the native `<select>` element we call `<daff-native-select>`.
 *
 */
@Component({
  selector: 'daff-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSelectAnimations.openSelect,
  ],
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['skeleton'],
})
export class DaffSelectComponent<T = unknown> extends daffSkeletonableMixin(_base) implements OnInit, OnDestroy, DaffSkeletonable, ControlValueAccessor {
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  private _destroyed = new Subject<boolean>();
  private _overlay: OverlayRef;
  private _open = false;
  private _value = null;
  private _animationState: DaffSelectAnimationState;
  private _animationFinishCallbackQueue: Array<() => void> = [];

  @Input() tabIndex: number;
  @Input() disabled = false;
  @Input() options: T[] = [];

  @HostBinding('class.daff-select') class = true;

  @HostBinding('class.daff-select--open') get openClass() {
    return this._open ? true : false;
  }

  @HostBinding('class.daff-select--disabled') get disabledClass() {
    return this.disabled;
  }

  @ViewChild('field') buttonElement: ElementRef;
  @ViewChild('optionsTemplate') optionsTemplatePortal: TemplatePortal<unknown>;

  @ContentChild(DaffSelectOptionDirective)
  optionTemplate?: DaffSelectOptionDirective;

  get isOpen(): boolean {
    return this._open;
  }

  get animationState() {
    return this._animationState;
  }

  get value() {
    return this._value;
  }

  constructor(
    private cd: ChangeDetectorRef,
    _elementRef: ElementRef,
    _renderer: Renderer2,
    @Inject(DOCUMENT) private document: any,
    @Optional() @Self() public ngControl: NgControl,
    private overlay: Overlay,
  ) {
    super(_elementRef, _renderer);
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy(): void {
    this._destroyed.next(true);
    this._overlay?.dispose();
  }

  private onChange(value: T): void {};
  private onTouched(value: T): void {};

  writeValue(value: T): void {
    this._value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {
	  this._animationState = getAnimationState(this._open);
  }

  trackByIndex(index: number) {
    return index;
  }

  animationFinished() {
    this._animationFinishCallbackQueue.forEach((cb) => {
      cb();
    });
    this._animationFinishCallbackQueue = [];
  }

  optionSelected(option: T) {
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(option);
    } else {
      this.writeValue(option);
    }

    this.toggle();
  }

  open() {
    this._open = true;
    this._overlay = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      disposeOnNavigation: true,
      minWidth: '240px',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.buttonElement)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 0,
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
        ]),
    });
    this._overlay.attach(this.optionsTemplatePortal);

    this._overlay.backdropClick().pipe(
      takeUntil(this._destroyed),
    ).subscribe(() => {
      this.toggle();
    });
  }

  close() {
	  this._open = false;
    // do we actually have to dispose and recreate the overlay every time we want to close the dropdown?
    this._animationFinishCallbackQueue.push(() => {
      this._overlay?.dispose();
      this._overlay = null;
    });
  }

  toggle(event?: KeyboardEvent | MouseEvent) {
    event?.preventDefault();
    event?.stopPropagation();

    if (this._open) {
      this.close();
    } else {
      this.open();
    }

    this._animationState = getAnimationState(this._open);
	  this.cd.markForCheck();
  }
}
