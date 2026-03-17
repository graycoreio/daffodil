import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCaretDown,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_FORM_HELPER_COMPONENTS } from '@daffodil/design/form';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';
import { DaffModalService } from '@daffodil/design/modal';

import {
  buildPaletteColors,
  colorValidator,
  Palette,
} from './helpers';
import { DAFF_DOCS_COLOR_STRIP_COMPONENTS } from '../../color-strip/color-strip';
import { DaffDocsExportPalettesModalComponent } from '../export-palettes-modal/export-palettes-modal.component';

@Component({
  selector: 'daff-docs-color-palette-generator',
  templateUrl: './color-palette-generator.component.html',
  styleUrl: './color-palette-generator.component.scss',
  host: {
    class: 'daff-docs-color-palette-generator',
  },
  imports: [
    ReactiveFormsModule,
    FaIconComponent,
    DAFF_BUTTON_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_FORM_HELPER_COMPONENTS,
    DaffInputComponent,
    DAFF_DOCS_COLOR_STRIP_COMPONENTS,
  ],
  providers: [
    DaffModalService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsColorPaletteGeneratorComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private modalService: DaffModalService,
  ) {}

  private nextId = 0;
  readonly faCaretDown = faCaretDown;
  readonly faPlus = faPlus;
  readonly faTrash = faTrash;
  readonly palettes = new Map<number, Palette>();
  readonly initialHex = '#EFEFEF';

  ngOnInit(): void {
    this.addPalette(this.initialHex);
  }

  addPalette(initialHex = this.initialHex): void {
    const id = this.nextId++;
    const hexColorControl = new FormControl<string>(initialHex, [
      Validators.required,
      colorValidator(),
    ]);

    const palette: Palette = {
      id,
      hexColorControl,
      hexColorLuminance: 0,
      hue: 0,
      saturation: 0,
      colors: [],
    };

    if (hexColorControl.valid) {
      const computed = buildPaletteColors(initialHex);
      Object.assign(palette, computed);
    }

    hexColorControl.valueChanges.subscribe((value) => {
      if (!hexColorControl.valid || !value) {
        return;
      }
      const computed = buildPaletteColors(value);
      const existing = this.palettes.get(id);
      if (existing) {
        Object.assign(existing, computed);
        this.cdr.markForCheck();
      }
    });

    this.palettes.set(id, palette);
    this.cdr.markForCheck();
  }

  onColorPicked(palette: Palette, event: Event): void {
    const hex = (<HTMLInputElement>event.target).value;
    palette.hexColorControl.setValue(hex);
    palette.hexColorControl.markAsDirty();
  }

  deletePalette(id: number): void {
    this.palettes.delete(id);
    this.cdr.markForCheck();
  }

  exportPalettes(): void {
    const ref = this.modalService.open(DaffDocsExportPalettesModalComponent);
    ref.instance.palettes = Array.from(this.palettes.values());
  }
}
