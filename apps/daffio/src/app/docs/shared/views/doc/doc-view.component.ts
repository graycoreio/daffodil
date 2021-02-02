import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioDoc } from '../../models/doc';

@Component({
  templateUrl: './doc-view.component.html',
})
export class DaffioDocViewComponent implements OnInit {

  doc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
