import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  Input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';
import {
  DaffModalComponent,
  DaffModalService,
} from '@daffodil/design/modal';

import { DaffioDocsSearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'daffio-docs-search-button',
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffIconButtonComponent,
  ],
  providers: [
    DaffModalService,
  ],
})

export class DaffioDocsSearchButtonComponent {
  faSearch = faSearch;

  modal: DaffModalComponent;

  @Input() icon = false;

  constructor(private modalService: DaffModalService, private destroyRef: DestroyRef) {}

  showModal() {
    this.modal = this.modalService.open(
      DaffioDocsSearchModalComponent,
      { ariaLabelledBy: 'Search docs' },
    );
    this.modal.closedAnimationCompleted.pipe(
      takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.modal = undefined;
      });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === '/' && !this.modal) {
      event.preventDefault();
      this.showModal();
    }
  }
}
