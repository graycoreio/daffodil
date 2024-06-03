import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioDoc } from '../../../docs/models/doc';
import { DaffioDocViewerModule } from '../../components/doc-viewer/doc-viewer.module';

@Component({
  selector: 'daffio-docs-page',
  templateUrl: './docs-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    RouterModule,
    DaffioDocViewerModule,
  ],
})
export class DaffioDocsPageComponent implements OnInit {
  doc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
