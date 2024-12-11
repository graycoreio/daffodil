import {
  HostBinding,
  Input,
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

import { DaffSelectableDirective } from '@daffodil/design';

@Component({
  standalone: true,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffTabActivatorComponent implements OnInit {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-tab-activator') class = true;

  /**
   * Sets the `role` to tab.
   */
  @HostBinding('attr.role') role = 'tab';

  /**
   * Sets `aria-selected` to true if the component is selected and false if it's not selected.
   */
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.selectableDirective.selected ? true :  false;
  }

  /**
   * Sets `tabindex` to `0` if the component is selected and `-1` if it's not selected.
   */
  @HostBinding('attr.tabindex') get tabIndex() {
    return this.selectableDirective.selected ? '0' :  '-1';
  }

  @HostBinding('attr.aria-controls') ariaControls = '';

  constructor(
    private el: ElementRef,
    private selectableDirective: DaffSelectableDirective,
  ) {
  }

  /**
   * The html id of the tab activator component
   */
  @Input() @HostBinding('attr.id') tabActivatorId = '';

  @Input() panelId = '';

  ngOnInit() {
    /**
     * Sets the value of `panelId` to the `ariaControls` property
     */
    this.ariaControls = this.panelId;
  }

  /**
   * Sets focus to the native element of the component
   */
  focus() {
    this.el.nativeElement.focus();
  }
}
