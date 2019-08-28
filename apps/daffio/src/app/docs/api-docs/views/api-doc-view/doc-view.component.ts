import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DaffioApiDoc } from '../../models/api-doc';

interface ApiDocResolverData {
  doc: DaffioApiDoc
}

@Component({
  templateUrl: './doc-view.component.html'
})
export class DaffioApiDocViewComponent implements OnInit {

  doc$: Observable<DaffioApiDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: ApiDocResolverData) => data.doc));
  }
}
