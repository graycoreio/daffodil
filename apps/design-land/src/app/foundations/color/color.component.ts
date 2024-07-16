import {
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocsPalette } from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';

@Component({
  selector: 'design-land-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class DesignLandColorComponent implements OnInit {
  palette$: Observable<DaffDocsPalette>;

  constructor(
    private docService: DaffDocsAssetService,
  ) {}

  ngOnInit(): void {
    this.palette$ = this.docService.get('docs/palettes/base').pipe(
      map((doc) => JSON.parse(doc.contents)),
    );
  }
}
