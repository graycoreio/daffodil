import {
  Location,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  AfterContentInit,
  ChangeDetectorRef,
  OnInit,
  input,
  output,
  signal,
  contentChildren,
  viewChildren,
} from '@angular/core';
import {
  Params,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { DaffTabComponent } from './tab/tab.component';
import { DaffTabActivatorComponent } from './tab-activator/tab-activator.component';
import { DaffTabLabelComponent } from './tab-label/tab-label.component';

/**
 * Tabs provide a way to navigate between panels that display related content without leaving the page.
 *
 * @example
 * ```html
 * <daff-tabs aria-label="List of tabs">
 * 	<daff-tab>
 * 		<daff-tab-label>
 * 			<fa-icon [icon]="faInfoCircle" daffPrefix></fa-icon>
 * 			Tab 1
 * 		</daff-tab-label>
 * 		<daff-tab-panel>
 * 			Tab 1 Panel
 * 		</daff-tab-panel>
 * 	</daff-tab>
 * 	<daff-tab>
 * 		<daff-tab-label>
 * 			Tab 2
 * 			<fa-icon [icon]="faInfoCircle" daffSuffix></fa-icon>
 * 		</daff-tab-label>
 * 		<daff-tab-panel>
 * 			Tab 2 Panel
 * 		</daff-tab-panel>
 * 	</daff-tab>
 * </daff-tabs>
 * ```
 */
@Component({
  selector: 'daff-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-tabs',
    '[attr.aria-label]': 'null',
  },
  imports: [
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    DaffTabActivatorComponent,
  ],
})

export class DaffTabsComponent implements AfterContentInit, OnInit {
  /**
   * @docs-private
   *
   * The currently selected tab. This property is dynamically updated when a user selects a tab.
   */
  selectedTab = signal<string>(undefined);

  /**
   * The tab that is selected on initial load. If it's not used, the first tab in the tablist will be selected by default.
   */
  initiallySelected = input<string>(null);

  /**
   * `aria-label` to label the tablist.
   */
  ariaLabel = input('', { alias: 'aria-label' });

  /**
   * Replace the tab buttons as links.
   */
  linkMode = input(false);

  /**
   * The URL to navigate to when the component is in link mode.
   * This component will set the specified query param.
   */
  url = input<string>();

  /**
   * The query parameter that the tabs component will use to set the tab value in link mode.
   */
  queryParam = input('tab');

  /**
   * Event emitted when tab selection changes.
   */
  tabChange = output<string>();

  /**
   * @docs-private
   */
  _labels = contentChildren(DaffTabLabelComponent, { descendants: true });

  /**
   * @docs-private
   */
  _tabs = contentChildren(DaffTabComponent);

  /**
   * @docs-private
   */
  _tabActivators = viewChildren(DaffTabActivatorComponent);

  /**
   * @docs-private
   */
  get currentPath(): string {
    return this.location.path();
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    private location: Location,
  ) {}

  private reset() {
    if(this.initiallySelected()) {
      this.selectedTab.set(this.initiallySelected());
    }

    if (!this.selectedTab()) {
      this.selectedTab.set(this._tabs()[0].id());
    }
  }

  /**
   * @docs-private
   */
  ngOnInit(): void {
    this.location.onUrlChange(() => {
      // if the app is navigated away from the current page, reset the state
      if (this.linkMode() && !this.location.isCurrentPathEqualTo(this.url(), `${this.queryParam()}=${this.selectedTab()}`)) {
        this.selectedTab.set(null);
        this.reset();
        this.tabChange.emit(this.selectedTab());
      }
    });
  }

  /**
   * @docs-private
   */
  ngAfterContentInit() {
    this.reset();
  }

  /**
   * @docs-private
   *
   * Selects a tab and sets focus on the selected tab.
   */
  select(tabId: string) {
    const tabActivator = this._tabActivators().find(el => el.tabActivatorId() === tabId);

    if (!tabActivator) {
      console.warn(`The tab '${tabId}' was not able to be selected because it does not exist. Check the id on your <daff-tab>s.`);
      return;
    }

    this.tabChange.emit(tabId);
    this.selectedTab.set(tabId);
    this.cdRef.markForCheck();

    tabActivator.focus();
  }

  /**
   * Navigates through the tabs based on the given offset.
   * Moves forward or backward in the tab array, wrapping around when necessary.
   */
  private navigateTabs(offset: number) {
    const array = this._tabs();
    let selectedIndex = array.findIndex(el => el.id() === this.selectedTab());
    const startingIndex = selectedIndex;
    let newIndex;

    do {
      newIndex = (selectedIndex + offset + array.length) % array.length;
      selectedIndex = newIndex;
    } while (array[newIndex].disabled && selectedIndex !== startingIndex); // Skip disabled tabs

    this.select(array[newIndex].id());
  }

  /**
   * @docs-private
   */
  _buildQueryParams(tab: string): Params {
    return {
      [this.queryParam()]: tab,
    };
  }

  /**
   * @docs-private
   *
   * Selects the previous tab and wraps around to the last tab if the first tab is currently selected.
   */
  previous() {
    this.navigateTabs(-1);
  }

  /**
   * @docs-private
   *
   * Selects the next tab and wraps around to the first tab if the last tab is currently selected.
   */
  next() {
    this.navigateTabs(1);
  }

  /**
   * @docs-private
   *
   * Selects the first tab.
   */
  selectFirst(event: KeyboardEvent | null) {
    event.preventDefault();
    this.select(this._tabs()[0].id());
  }

  /**
   * @docs-private
   *
   * Selects the last tab.
   */
  selectLast(event: KeyboardEvent | null) {
    event.preventDefault();
    const array = this._tabs();
    this.select(array[array.length - 1].id());
  }
}
