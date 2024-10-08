import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  ChangeDetectorRef,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DaffTabComponent } from './tab/tab.component';
import { DaffTabActivatorComponent } from './tab-activator/tab-activator.component';
import { DaffTabLabelComponent } from './tab-label/tab-label.component';

/**
 * Tabs provide a way to navigate between panels that display related content.
 */
@Component({
  standalone: true,
  selector: 'daff-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    DaffTabActivatorComponent,
  ],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
})
export class DaffTabsComponent implements AfterContentInit {
  @HostBinding('class.daff-tabs') class = true;

  //test
  selectedTab: string;

  //test
  @Input() initiallySelected: string = null;

  @HostBinding('attr.aria-label') externalAriaLabel = null;
  @Input('aria-label') ariaLabel = '';

  //test
  @Output() tabChange = new EventEmitter<string>();

  @ContentChildren(DaffTabLabelComponent, { descendants: true }) _labels: QueryList<DaffTabLabelComponent>;

  @ContentChildren(DaffTabComponent) _tabs: QueryList<DaffTabComponent>;

  @ViewChildren(DaffTabActivatorComponent) _tabActivators: QueryList<DaffTabActivatorComponent>;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterContentInit() {
    if(this.initiallySelected) {
      this.selectedTab = this.initiallySelected;
    }

    if (!this.selectedTab) {
      this.selectedTab = this._tabs.first.id;
    }
  }

  /**
   * Selects a tab and sets focus on the selected tab.
   */
  select(tabId: string) {
    const tabActivator = this._tabActivators.find(el => el.tabActivatorId === tabId);

    if (!tabActivator) {
      console.warn(`The tab '${tabId}' was not able to be selected because it does not exist. Check the id on your <daff-tab>s.`);
      return;
    }

    this.tabChange.emit(tabId);
    this.selectedTab = tabId;
    this.cdRef.markForCheck();

    tabActivator.focus();
  }

  /**
   * Navigates through the tabs based on the given offset.
   * Moves forward or backward in the tab array, wrapping around when necessary.
   */
  private navigateTabs(offset: number) {
    const array = this._tabs.toArray();
    let selectedIndex = array.findIndex(el => el.id === this.selectedTab);
    const startingIndex = selectedIndex;
    let newIndex;

    do {
      newIndex = (selectedIndex + offset + array.length) % array.length;
      selectedIndex = newIndex;
    } while (array[newIndex].disabled && selectedIndex !== startingIndex); // Skip disabled tabs

    this.select(array[newIndex].id);
  }

  /**
   * Selects the previous tab and wraps around to the last tab if the first tab is currently selected.
   */
  previous() {
    this.navigateTabs(-1);
  }

  /**
   * Selects the next tab and wraps around to the first tab if the last tab is currently selected.
   */
  next() {
    this.navigateTabs(1);
  }

  /**
   * Selects the first tab.
   */
  selectFirst(event: KeyboardEvent | null) {
    event.preventDefault();
    this.select(this._tabs.toArray()[0].id);
  }

  /**
   * Selects the last tab.
   */
  selectLast(event: KeyboardEvent | null) {
    event.preventDefault();
    const array = this._tabs.toArray();
    this.select(array[array.length - 1].id);
  }
}
