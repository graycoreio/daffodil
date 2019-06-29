import { Component, OnInit } from '@angular/core';

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
  docsList: DaffioApiDocReference[];

  constructor(
    private docService: DaffioDocService
  ) {}

  ngOnInit() {
    this.docService.getDocsList().subscribe(
      (data) => {
        console.log(data[0].items);
        this.docsList = data[0].items;
      },
      (error) => {}
    );
  }
}
