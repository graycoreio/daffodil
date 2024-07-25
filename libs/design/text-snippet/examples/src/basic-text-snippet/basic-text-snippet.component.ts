import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-text-snippet',
  templateUrl: './basic-text-snippet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTextSnippetComponent {}
