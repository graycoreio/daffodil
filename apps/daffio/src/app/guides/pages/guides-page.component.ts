import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioDoc } from '../../docs/models/doc';

@Component({
  templateUrl: './guides-page.component.html',
})
export class DaffioGuidesPageComponent implements OnInit {

  guideDoc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.guideDoc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
