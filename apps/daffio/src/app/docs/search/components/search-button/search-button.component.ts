import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';

import { DaffIconButtonComponent } from '@daffodil/design/button';
import {
  DaffModalRef,
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

export class DaffioDocsSearchButtonComponent implements OnInit {
  faSearch = faSearch;

  modal: DaffModalRef<DaffioDocsSearchModalComponent> | undefined;

  @Input() icon = false;

  constructor(
    private modalService: DaffModalService,
    private destroyRef: DestroyRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((evt) => evt instanceof NavigationEnd),
    ).subscribe(() => {
      this.modal?.close();
    });
  }

  showModal() {
    this.modal = this.modalService.open(
      DaffioDocsSearchModalComponent,
      {
        ariaLabelledBy: 'Search docs',
        position: {
          vertical: 'top',
        },
      },
    );
    this.modal.afterClosed.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
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
