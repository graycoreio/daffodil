import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioDoc } from '../../../docs/models/doc';

@Component({
  selector: 'daffio-package-page',
  templateUrl: './package-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioPackagePageComponent implements OnInit {

  packageDoc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.packageDoc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
