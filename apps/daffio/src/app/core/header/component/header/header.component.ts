import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import { DaffPalette } from 'libs/design/src';

@Component({
  selector: 'daffio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class DaffioHeaderComponent {
  /**
   * The color of the header
   */
  @Input() color: DaffPalette;

  /**
   * Whether or not the header is currently `position:fixed`
   * or `position: static` as set by `position:sticky`.
   */
  @Input() stuck: boolean;
}