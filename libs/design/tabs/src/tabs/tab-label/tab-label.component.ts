import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffPrefixable,
  DaffSuffixable,
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
export class DaffTabLabelComponent implements DaffPrefixable, DaffSuffixable {
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;

  constructor(
    private tab: DaffTabComponent,
  ) {}

  get tabLabelId() {
    return this.tab.id;
  }
}
