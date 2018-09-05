import { Component, Output, EventEmitter, Input, ViewEncapsulation, ContentChild } from '@angular/core';
import { DaffSidebarContentComponent } from '../sidebar-content/sidebar-content.component';

@Component({
  selector: 'daff-sidebar-wrapper',
  templateUrl: './sidebar-wrapper.component.html',
  styleUrls: ['../sidebar/sidebar.component.scss'],
  host: {
    class: 'daff-sidebar__wrapper',
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffSidebarWrapperComponent {

  @ContentChild(DaffSidebarContentComponent) _content: DaffSidebarContentComponent;

  /**
   * Event fired when the backdrop is clicked
   * This is often used to close the sidenav
   */
  @Output() onBackdropClicked: EventEmitter<void> = new EventEmitter<void>();

  _onBackdropClicked() : void {
    this.onBackdropClicked.emit();
  }

  /**
   * Input state for whether or not to use the backdrop
   */
  @Input() hasBackdrop: boolean = true;

  /**
   * Input state for whether or not the backdrop is 
   * "visible" to the human eye
   */
  @Input() backdropIsVisible: boolean = false;

}
