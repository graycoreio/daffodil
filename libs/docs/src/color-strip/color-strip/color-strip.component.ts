import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'daff-docs-color-strip',
  templateUrl: './color-strip.component.html',
  styleUrl: './color-strip.component.scss',
  host: {
    class: 'daff-docs-color-strip',
    '[style.background]': 'background()',
    '[style.color]': 'textColor()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffDocsColorStripComponent {
  readonly background = input.required<string>();
  readonly textColor = input<string>();
}
