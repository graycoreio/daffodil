import {
  NgFor,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChildren,
  TemplateRef,
  QueryList,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DaffTabPanelComponent } from '../public_api';
import { DaffTabComponent } from './tab/tab.component';
import { DaffTabLabelDirective } from './tab-label/tab-label.directive';

/**
 * DaffTabsComponent provides a way ...
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
    DaffTabComponent,
  ],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
})
export class DaffTabsComponent implements AfterContentInit {

  @Output() tabChange = new EventEmitter<string>();

  @Input() selectedTab: string;

  @HostBinding('class.daff-tabs') class = true;

  @ContentChildren(DaffTabLabelDirective, { descendants: true }) _labels: QueryList<DaffTabLabelDirective>;

  @ContentChildren(DaffTabPanelComponent) _panels: QueryList<DaffTabPanelComponent>;

  ngAfterContentInit() {
    console.log(this._labels);
    console.log(this._panels);

    if (!this.selectedTab) {
      this.selectedTab = this._panels.first.id;
    }
    console.log(this.selectedTab);
  }

  onClick(panelId: string) {
    this.tabChange.emit(panelId);
    this.selectedTab = panelId;
  }
}
