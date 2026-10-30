import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-branding-copyright',
  templateUrl: './copyright.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DaffCopyrightComponent {
  today: number = Date.now();
}
