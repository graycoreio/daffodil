import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  ContentChild,
  ElementRef,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daff-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DaffSidebarHeaderComponent {
  @HostBinding('class.daff-sidebar-header') class = true;
}
