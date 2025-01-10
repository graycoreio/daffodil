import {
  AsyncPipe,
  NgComponentOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsDynamicContentComponentService } from '../../dynamic-content/dynamic-content-component.service';
import { DaffioDocsDynamicContent } from '../../dynamic-content/dynamic-content.type';

@Component({
  selector: 'daffio-docs-page',
  templateUrl: './docs-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule,
    NgComponentOutlet,
  ],
  providers: [
    DaffioDocsDynamicContentComponentService,
  ],
})
export class DaffioDocsPageComponent implements OnInit {
  doc$: Observable<DaffDoc>;
  component$: Observable<Type<DaffioDocsDynamicContent>>;

  constructor(
    private route: ActivatedRoute,
    private componentService: DaffioDocsDynamicContentComponentService,
  ) {}

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: { doc: DaffDoc }) => data.doc));
    this.component$ = this.doc$.pipe(
      map((doc) => this.componentService.getComponent(doc)),
    );
  }
}
