import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'daff-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
})
export class DaffSwitchComponent {
  @Input() on = false;
  @Output() toggle = new EventEmitter<boolean>();
}
