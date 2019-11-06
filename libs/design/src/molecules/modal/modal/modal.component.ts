import { Component, Output, EventEmitter, Input, OnInit, HostBinding, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    daffFadeAnimations.fade
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffModalComponent {
  _animationState: string;
  _verticalPosition = 'center';
  _horizontalPosition = 'center';

  @ViewChild(CdkPortalOutlet, {static: true}) _portalOutlet: CdkPortalOutlet;

  attachContent(portal: ComponentPortal<any> | TemplateRef<any>): any {
      this._portalOutlet.attach(portal)
  }

  /**
   * Animation hook for that controls the backdrops 
   * entrance and fade animations.
   */
  @HostBinding('@fade')
  
  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() backdropIsVisible: boolean = true;

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the modal
   */
  @Output() hide: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  get verticalPosition(): string { return this._verticalPosition; }
  set verticalPosition(value: string) {
    if (value !== 'center' && value !== 'top' && value !== 'bottom') {
      throw Error(`verticalPosition value must be either 'center', 'top', or 'bottom'.
      Example: <daff-modal verticalPosition="top"></daff-modal>`);
    }
    this._verticalPosition = value;
  }

  @Input()
  get horizontalPosition(): string { return this._horizontalPosition; }
  set horizontalPosition(value: string) {
    if (value !== 'center' && value !== 'left' && value !== 'right') {
      throw Error(`horizontalPosition value must be either 'center', 'left', or 'right'.
      Example: <daff-modal horizontalPosition="right"></daff-modal>`);
    }
    this._horizontalPosition = value;
  }

  
  _backdropClicked() : void {
    this.hide.emit();
  }

  @HostBinding('class.daff-modal--left') left (): boolean {
    return this._horizontalPosition === 'left';
  }
  
  @HostBinding('class.daff-modal--right') right() : boolean {
    return this._horizontalPosition === 'right';
  }

  @HostBinding('class.daff-modal--center') center() : boolean {
    return this._horizontalPosition === 'center';
  }

  @HostBinding('class.daff-modal--top') top() : boolean {
    return this._verticalPosition === 'top';
  }

  @HostBinding('class.daff-modal--bottom') bottom() : boolean {
    return this._verticalPosition === 'bottom';
  }

  @HostBinding('class.daff-modal--middle') middle() : boolean {
    return this._verticalPosition === 'center';
  }


}
