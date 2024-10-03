
import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import {
  DaffPrefixable,
  DaffPrefixDirective,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffTabComponent } from '../tab/tab.component';

@Component({
  standalone: true,
  selector: 'daff-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrl: './tab-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})
export class DaffTabLabelComponent implements DaffPrefixable {
  constructor(
    private tab: DaffTabComponent) {
  }

  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  get panelId() {
    return this.tab.id;
  }

  @ViewChild('label', { read: TemplateRef, static: true }) templateRef: TemplateRef<any>;
}
