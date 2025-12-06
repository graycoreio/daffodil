import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

import { DesignLandColorPaletteService } from './service/palette.service';

@Component({
  selector: 'design-land-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  standalone: false,
})
export class DesignLandColorComponent implements OnInit {
  colorPalettes$: Observable<Array<DaffDocsSassItem>>;

  constructor(
    private colorPaletteService: DesignLandColorPaletteService,
  ) {}

  ngOnInit(): void {
    this.colorPalettes$ = this.colorPaletteService.get();
  }
}
