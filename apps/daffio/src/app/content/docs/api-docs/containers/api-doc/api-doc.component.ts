import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DaffioDocService } from '../../services/api-doc.service';
import { DaffioApiDoc } from '../../models/api-doc';
import { switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'daffio-api-doc-container',
  templateUrl: './api-doc.component.html'
})
export class DaffioApiDocContainer implements OnInit {

  /**
   * An API document.
   */
  doc$: Observable<DaffioApiDoc> = null;

  constructor(
    private docService: DaffioDocService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // todo should navigate to 404 on a 404 error.
    this.doc$ = this.route.url.pipe(
      switchMap((url) => {
        return this.docService.getDoc(url.join('/'))
          .pipe(
            map((doc) => {
              return doc;
            },
            catchError(error => {
              return null;
            })
          )
        )
      })
    );
  }
}
