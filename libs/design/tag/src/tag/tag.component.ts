import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
  DaffDisableable,
  DaffDisableableDirective,
  DaffPrefixDirective,
  DaffStatusableDirective,
} from '@daffodil/design';

import { DaffTagSizableDirective } from './tag-sizable.directive';

/**
 * Contains the tag content: checkmark icon, label, and delete button.
 *
 * @example
 * ```html
 *  <daff-tag [dismissible]="true" (closeTag)="onCloseTag()">
 *    <fa-icon daffPrefix [icon]="faCircleCheck"></fa-icon>
 *    <div>Label</div>
 *  </daff-tag>
 * ```
 */

@Component({
  selector: 'daff-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffTagSizableDirective,
      inputs: ['size'],
    },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-tag',
    '[attr.aria-disabled]': 'disabled ? true : null',
    '[class.dismissible]': 'dismissible',
  },
  imports: [
    FaIconComponent,
    DaffPrefixDirective,
  ],
})
export class DaffTagComponent implements DaffDisableable {
  /**
   * @docs-private
   */
  faTimes = faTimes;

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective, { static: true }) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   *
   * Internal function to access the disabled property of the DaffDisableableDirective.
   */
  get disabled() {
    return this.disabledDirective.disabled;
  }

  private _dismissible = false;

  /** Whether the tag can be dismissed by the user.
   * Displays a close icon if `true`.
   */
  @Input() get dismissible() {
    return this._dismissible;
  }
  set dismissible(value: any) {
    this._dismissible = coerceBooleanProperty(value);
  }

  /**
   * Emits when the tag is closed.
   */
  @Output() closeTag: EventEmitter<void> = new EventEmitter();

  /**
   * @docs-private
   *
   * Internal handler for the close icon click.
   */
  onCloseTag(event: Event) {
    if (this.disabled) {
      return;
    }
    this.closeTag.emit();
  }

  constructor(
    private size: DaffTagSizableDirective,
    private disabledDirective: DaffDisableableDirective,
  ) {
    /**
     * Sets the default size of a tag to medium.
     */
    this.size.defaultSize = 'md';
  }
}
