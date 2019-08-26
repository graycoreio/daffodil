import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaffioDoc } from '../../models/doc';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './doc-view.component.html'
})
export class DaffioDocViewComponent implements OnInit {

  doc$: Observable<DaffioDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: { doc: DaffioDoc }) => data.doc));
  }
}
