import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'colorable-tag',
  templateUrl: './colorable-tag.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
    FaIconComponent,
    NgIf,
  ],
})
export class ColorableTagComponent {
  faCircleCheck = faCircleCheck;

  hiddenTags: { [key: string]: boolean } = {
    default: false,
    primary: false,
    secondary: false,
    tertiary: false,
    dark: false,
    light: false,
    theme: false,
    'theme-contrast': false,
  };

  hideTag(tagId: string) {
    this.hiddenTags[tagId] = true;
  }
}
