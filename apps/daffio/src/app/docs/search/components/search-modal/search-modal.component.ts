import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import { DaffioDocsSearchResultItemDirective } from '../../directives/search-result-item/search-result-item.directive';
import { DaffioDocsSearchFieldComponent } from '../search-field/search-field.component';
import { DaffioDocsSearchFooterComponent } from '../search-footer/search-footer.component';

@Component({
  selector: 'daffio-docs-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsSearchFieldComponent,
    DaffioDocsSearchResultItemDirective,
    DaffioDocsSearchFooterComponent,
    FaIconComponent,
  ],
})

export class DaffioDocsSearchModalComponent implements AfterViewInit {
  faFileLines = faFileLines;
  faGear = faGear;

  @HostBinding('class.daffio-docs-search-modal') class = true;

  @ViewChildren(DaffioDocsSearchResultItemDirective) items: QueryList<DaffioDocsSearchResultItemDirective>;

  private keyManager: ActiveDescendantKeyManager<DaffioDocsSearchResultItemDirective>;

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();
  }
}
