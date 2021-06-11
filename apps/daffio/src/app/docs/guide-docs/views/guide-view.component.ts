import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffioDoc } from '../../shared/models/doc';

@Component({
  templateUrl: './guide-view.component.html',
})
export class DaffioGuideViewComponent implements OnInit {

  guideDoc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.guideDoc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
