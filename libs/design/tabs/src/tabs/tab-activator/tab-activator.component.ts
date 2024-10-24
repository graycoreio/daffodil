import {
  HostBinding,
  Input,
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

@Component({
  standalone: true,
  selector: '' +
    'button[daff-tab-activator]' + ',' +
    'a[daff-tab-activator]',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-activator.component.scss',
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

  /** Whether or not a tab is selected */
  @Input() @HostBinding('class.selected') selected = false;

  /**
   * Sets `aria-selected` to true if the component is selected and false if it's not selected.
   */
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.selected ? true :  false;
  }

  /**
   * Sets `tabindex` to `0` if the component is selected and `-1` if it's not selected.
   */
  @HostBinding('attr.tabindex') get tabIndex() {
    return this.selected ? '0' :  '-1';
  }

  @HostBinding('attr.aria-controls') ariaControls = '';

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

  constructor(
    private el: ElementRef,
  ) {
  }

  /**
   * Sets focus to the native element of the component
   */
  focus() {
    this.el.nativeElement.focus();
  }
}
