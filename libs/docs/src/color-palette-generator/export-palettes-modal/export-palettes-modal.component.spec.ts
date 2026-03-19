import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { DaffModalService } from '@daffodil/design/modal';

import { DaffDocsExportPalettesModalComponent } from './export-palettes-modal.component';
import { Palette } from '../color-palette-generator/helpers';

describe('@daffodil/docs | DaffDocsExportPalettesModalComponent', () => {
  let component: DaffDocsExportPalettesModalComponent;
  let fixture: ComponentFixture<DaffDocsExportPalettesModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDocsExportPalettesModalComponent,
      ],
      providers: [
        DaffModalService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffDocsExportPalettesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty palettes array', () => {
    expect(component.palettes).toEqual([]);
  });

  describe('getPaletteText', () => {
    let palette: Palette;

    beforeEach(() => {
      palette = {
        id: 1,
        hexColorControl: new FormControl('#FF0000'),
        hexColorLuminance: 50,
        hue: 12,
        saturation: 100,
        colors: [
          { hex: '#fee', luminance: 96, daffIncrement: 10, originalColor: false, textColor: '#000' },
          { hex: '#f00', luminance: 53.2, daffIncrement: 20, originalColor: true, textColor: '#000' },
        ],
      };
    });

    it('should return the palette formatted as a SCSS map variable', () => {
      const result = component.getPaletteText(palette);
      expect(result).toEqual(`$palette-FF0000: (\n  10: #fee,\n  20: #f00\n);`);
    });
  });
});
