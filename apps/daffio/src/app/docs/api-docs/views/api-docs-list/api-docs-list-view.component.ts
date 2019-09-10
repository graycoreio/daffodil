import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffioApiDocReference } from '../../models/api-doc-reference';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './api-docs-list-view.component.html'
})
export class DaffioApiDocsListViewComponent implements OnInit {
  /**
   * A list of references for API documents.
   */
  docsList$: Observable<DaffioApiDocReference[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.docsList$ = this.route.data.pipe(
      map((data: { reference: DaffioApiDocReference[] }) => data.reference)
    );
  }
}
