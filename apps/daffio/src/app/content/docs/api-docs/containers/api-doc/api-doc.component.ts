import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DaffioDocService } from '../../services/api-doc.service';
import { DaffioApiDoc } from '../../models/api-doc';

@Component({
  selector: 'daffio-api-doc-container',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.scss']
})
export class DaffioApiDocContainer implements OnInit {

  /**
   * An API document.
   */
  doc: DaffioApiDoc = null;

  constructor(
    private docService: DaffioDocService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // todo should navigate to 404 on a 404 error.
    this.route.url.subscribe((url) => {
      this.docService.getDoc(url[0] + '/' + url[1] + '/' + url[2]).subscribe(
        (doc) => {
          this.doc = doc;
        },
        (error) => {}
      );
    });
  }
}
