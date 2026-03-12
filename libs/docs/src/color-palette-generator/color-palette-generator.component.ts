import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_FORM_HELPER_COMPONENTS } from '@daffodil/design/form';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';
import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

import {
  buildPaletteColors,
  colorValidator,
  Palette,
} from './helpers';

let nextId = 0;

@Component({
  selector: 'daff-docs-color-palette-generator',
  templateUrl: './color-palette-generator.component.html',
  styleUrl: './color-palette-generator.component.scss',
  host: {
    class: 'daff-docs-color-palette-generator',
  },
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaIconComponent,
    DAFF_BUTTON_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_FORM_HELPER_COMPONENTS,
    DaffInputComponent,
    DAFF_TAG_COMPONENTS,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsColorPaletteGeneratorComponent implements OnInit {
  readonly faPalette = faPalette;
  readonly palettes = signal<Map<number, Palette>>(new Map());
  readonly initialHex = '#EFEFEF';

  ngOnInit(): void {
    this.addPalette(this.initialHex);
  }

  addPalette(initialHex = this.initialHex): void {
    const id = nextId++;
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
      this.palettes.update((palettes) => {
        const existing = palettes.get(id);
        if (!existing) {
          return palettes;
        }
        const updated = new Map(palettes);
        updated.set(id, { ...existing, ...computed });
        return updated;
      });
    });

    this.palettes.update((p) => new Map(p).set(id, palette));
  }

  deletePalette(id: number): void {
    this.palettes.update((p) => {
      const updated = new Map(p);
      updated.delete(id);
      return updated;
    });
  }
}
