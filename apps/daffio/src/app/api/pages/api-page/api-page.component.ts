import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioApiDoc } from '../../models/api-doc';

interface ApiResolverData {
  doc: DaffioApiDoc;
}

@Component({
  templateUrl: './api-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiPageComponent implements OnInit {

  doc$: Observable<DaffioApiDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: ApiResolverData) => data.doc));
  }
}
