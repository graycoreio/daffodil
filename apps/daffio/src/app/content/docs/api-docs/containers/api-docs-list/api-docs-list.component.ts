import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DaffioDocService } from '../../services/api-doc.service';
import { DaffioApiDocReference } from '../../models/api-doc-reference';

@Component({
  selector: 'daffio-api-docs-list-container',
  templateUrl: './api-docs-list.component.html'
})
export class ApiDocsListContainer implements OnInit {

  /**
   * A list of references for API documents.
   */
  docsList$: Observable<DaffioApiDocReference[]>;

  constructor(
    private docService: DaffioDocService
  ) {}

  ngOnInit() {
    this.docsList$ = this.docService.getDocsList().pipe(
      map(docsList => docsList[0].items),
      catchError(error => {
        //todo navigate to 404 page
        return null;
      })
    )
  }
}
