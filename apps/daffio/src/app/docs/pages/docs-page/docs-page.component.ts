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

import { DaffioDocsDynamicallyRenderableComponentService } from '../../dynamically-renderable/component.service';
import { DaffioDocsDynamicallyRenderable } from '../../dynamically-renderable/type';

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
})
export class DaffioDocsPageComponent implements OnInit {
  doc$: Observable<DaffDoc>;
  component$: Observable<Type<DaffioDocsDynamicallyRenderable>>;

  constructor(
    private route: ActivatedRoute,
    private componentService: DaffioDocsDynamicallyRenderableComponentService,
  ) {}

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: { doc: DaffDoc }) => data.doc));
    this.component$ = this.doc$.pipe(
      map((doc) => this.componentService.getComponent(doc)),
    );
  }
}
