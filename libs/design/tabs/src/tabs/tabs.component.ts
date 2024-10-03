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
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DaffTabComponent } from './tab/tab.component';
import { DaffTabActivatorComponent } from './tab-activator/tab-activator.component';
import { DaffTabLabelComponent } from './tab-label/tab-label.component';

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
    DaffTabActivatorComponent,
  ],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
})
export class DaffTabsComponent implements AfterContentInit {

  @Output() tabChange = new EventEmitter<string>();

  @Input() selectedTab: string;

  @HostBinding('class.daff-tabs') class = true;

  @ContentChildren(DaffTabLabelComponent, { descendants: true }) _labels: QueryList<DaffTabLabelComponent>;

  @ContentChildren(DaffTabComponent) _tabs: QueryList<DaffTabComponent>;

  ngAfterContentInit() {
    console.log(this._labels);
    console.log(this._tabs);

    if (!this.selectedTab) {
      this.selectedTab = this._tabs.first.id;
    }
    console.log(this.selectedTab);
  }

  onClick(panelId: string) {
    this.tabChange.emit(panelId);
    this.selectedTab = panelId;
  }
}
