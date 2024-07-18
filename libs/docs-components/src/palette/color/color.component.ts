import {
  AsyncPipe,
  KeyValuePipe,
} from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocsPalette } from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';

import { DaffDocsPaletteShadeSortPipe } from '../shade-sort.pipe';

@Component({
  selector: 'daff-docs-color-palettes',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    KeyValuePipe,
    DaffDocsPaletteShadeSortPipe,
  ],
})
export class DaffDocsColorPalettesComponent implements OnInit {
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
