/* eslint-disable quote-props */
import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

import { DaffSelectableDirective } from '@daffodil/design';

@Component({
  selector: '' +
    'button[daff-tab-activator]' + ',' +
    'a[daff-tab-activator]',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-activator.component.scss',
  hostDirectives: [
    {
      directive: DaffSelectableDirective,
      inputs: ['selected'],
    },
  ],
  host: {
    'class': 'daff-tab-activator',
    'role': 'tab',
    '[attr.aria-selected]': 'ariaSelected',
    '[attr.tabindex]': 'tabIndex',
    '[attr.id]': 'tabActivatorId',
    '[attr.aria-controls]': 'panelId',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffTabActivatorComponent {
  /**
   * @docs-private
   *
   * Sets `aria-selected` to true if the component is selected and false if it's not selected.
   */
  get ariaSelected() {
    return this.selectableDirective.selected ? true :  false;
  }

  /**
   * @docs-private
   *
   * Sets `tabindex` to `0` if the component is selected and `-1` if it's not selected.
   */
  get tabIndex() {
    return this.selectableDirective.selected ? '0' :  '-1';
  }

  constructor(
    private el: ElementRef,
    private selectableDirective: DaffSelectableDirective,
  ) {
  }

  /**
   * The html id of the tab activator component
   */
  @Input() tabActivatorId = '';

  @Input() panelId = '';

  /**
   * Sets focus to the native element of the component.
   */
  focus() {
    this.el.nativeElement.focus();
  }
}
