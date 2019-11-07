import { Component, Output, EventEmitter, Input, OnInit, HostBinding, ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';

import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

export type DaffModalVerticalPosition = 'top' | 'center' | 'bottom';
export type DaffModalHorizontalPosition = 'left' | 'center' | 'right';

export type DaffModalConfiguration = {
  verticalPosition: DaffModalVerticalPosition;
  horizontalPosition: DaffModalHorizontalPosition;
  open?: boolean;
}

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    daffFadeAnimations.fade
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffModalComponent implements DaffModalConfiguration {
  constructor(private cd: ChangeDetectorRef){}

  @Input() open = false;

  private _verticalPosition: DaffModalVerticalPosition = 'center';
  private _horizontalPosition : DaffModalHorizontalPosition = 'center';

  @ViewChild(CdkPortalOutlet, {static: true}) _portalOutlet: CdkPortalOutlet;

  attachContent(portal: ComponentPortal<any>): any {
      this._portalOutlet.attachComponentPortal(portal)
  }

  /**
   * Animation hook for that controls modals entrance and exit animations
   */
  @HostBinding('@fade') get fadeState() : string {
    return getAnimationState(this.open)
  }

  @HostListener('@fade.done', ['$event'])
	animationDone(event: AnimationEvent) {
		this.animationCompleted.emit(event);
  }

  @Output() animationCompleted: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the modal
   */
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  get verticalPosition(): DaffModalVerticalPosition { return this._verticalPosition; }
  set verticalPosition(value: DaffModalVerticalPosition) {
    if (value !== 'center' && value !== 'top' && value !== 'bottom') {
      throw Error(`verticalPosition value must be either 'center', 'top', or 'bottom'.
      Example: <daff-modal verticalPosition="top"></daff-modal>`);
    }
    this._verticalPosition = value;
  }

  @Input()
  get horizontalPosition(): DaffModalHorizontalPosition { return this._horizontalPosition; }
  set horizontalPosition(value: DaffModalHorizontalPosition) {
    if (value !== 'center' && value !== 'left' && value !== 'right') {
      throw Error(`horizontalPosition value must be either 'center', 'left', or 'right'.
      Example: <daff-modal horizontalPosition="right"></daff-modal>`);
    }
    this._horizontalPosition = value;
  }

  @HostBinding('class.daff-modal') modalClass = true;

  @HostBinding('class.daff-modal--left') get left(): boolean {
    return this._horizontalPosition === 'left';
  }
  
  @HostBinding('class.daff-modal--right') get right(): boolean {
    return this._horizontalPosition === 'right';
  }

  @HostBinding('class.daff-modal--center') get center(): boolean {
    return this._horizontalPosition === 'center';
  }

  @HostBinding('class.daff-modal--top') get top(): boolean {
    return this._verticalPosition === 'top';
  }

  @HostBinding('class.daff-modal--bottom') get bottom(): boolean {
    return this._verticalPosition === 'bottom';
  }

  @HostBinding('class.daff-modal--middle') get middle(): boolean {
    return this._verticalPosition === 'center';
  }


}
