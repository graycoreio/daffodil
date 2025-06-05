import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  viewChildren,
  effect,
  WritableSignal,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffApiDirective,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocsTocHeaderDirective } from '../../../../toc/header.directive';
import { DaffioDocsApiDynamicContentFragment } from '../../../dynamic-content/fragment.type';
import { DaffioDocsApiPropertyBlockComponent } from '../../property-block/property-block.component';

@Component({
  selector: 'daffio-docs-api-inputs-fragment',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffioDocsApiPropertyBlockComponent,
    DaffioDocsTocHeaderDirective,
  ],
})
export class DaffioDocsApiInputsFragmentComponent implements DaffioDocsApiDynamicContentFragment<DaffApiDirective> {
  private readonly viewHeaders = viewChildren(DaffioDocsTocHeaderDirective);
  private readonly _toc = computed(() => this.viewHeaders().reduce((toc, directive) => {
    toc.push(directive.entry());
    return toc;
  }, <DaffDocTableOfContents>[]));

  readonly faChevronRight = faChevronRight;
  readonly faChevronLeft = faChevronLeft;

  doc = input<DaffApiDirective>();
  child = input(false);
  toc = input<WritableSignal<DaffDocTableOfContents>>();

  constructor() {
    effect(() => {
      this.toc().set(this._toc());
    });
  }
}
