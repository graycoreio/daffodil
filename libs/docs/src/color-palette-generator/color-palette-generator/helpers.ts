import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Hsluv } from 'hsluv';

export interface PaletteColor {
  hex: string;
  luminance: number;
  daffIncrement: number;
  originalColor: boolean;
  textColor: string;
}

export interface Palette {
  id: number;
  hexColorControl: FormControl<string | null>;
  hexColorLuminance: number;
  hue: number;
  saturation: number;
  colors: PaletteColor[];
}

export function isValidColor(hex: string): boolean {
  return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(hex);
}

export function colorValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = isValidColor(control.value);
    return valid ? null : { color: { value: control.value }};
  };
}

function convertHexToHsluv(hex: string) {
  if (hex.length === 4) {
    hex = `#${hex[1].repeat(2)}${hex[2].repeat(2)}${hex[3].repeat(2)}`;
  }
  const c = new Hsluv();
  c.hex = hex;
  c.hexToHsluv();
  return { hue: c.hsluv_h, saturation: c.hsluv_s, luminance: c.hsluv_l };
}

function generatePalette(hue: number, saturation: number): PaletteColor[] {
  const colors: PaletteColor[] = [];
  const c = new Hsluv();
  for (
    let luminance = 96, daffIncrement = 10;
    luminance >= 11;
    luminance -= 9.4, daffIncrement += 10
  ) {
    c.hsluv_h = hue;
    c.hsluv_s = saturation;
    c.hsluv_l = luminance;
    c.hsluvToHex();
    colors.push({
      hex: c.hex,
      luminance: c.hsluv_l,
      daffIncrement,
      originalColor: false,
      textColor: +c.hsluv_l.toFixed(0) < 50 ? '#fff' : '#000',
    });
  }
  return colors;
}

function fitColorIntoPalette(
  colors: PaletteColor[],
  color: ReturnType<typeof convertHexToHsluv>,
): PaletteColor[] {
  let nearestIndex = 0;
  let smallestDistance = Infinity;
  colors.forEach((paletteColor, index) => {
    const distance = Math.abs(paletteColor.luminance - color.luminance);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearestIndex = index;
    }
  });

  const updated = [...colors];
  const original = new Hsluv();
  original.hsluv_h = color.hue;
  original.hsluv_s = color.saturation;
  original.hsluv_l = color.luminance;
  original.hsluvToHex();

  updated[nearestIndex] = {
    ...updated[nearestIndex],
    luminance: color.luminance,
    hex: original.hex,
    originalColor: true,
    textColor: +color.luminance.toFixed(0) < 50 ? '#fff' : '#000',
  };
  return updated;
}

export function buildPaletteColors(hex: string): Omit<Palette, 'id' | 'hexColorControl'> {
  const hsluv = convertHexToHsluv(hex);
  const base = generatePalette(hsluv.hue, hsluv.saturation);
  const colors = fitColorIntoPalette(base, hsluv);
  return {
    hexColorLuminance: +hsluv.luminance.toFixed(0),
    hue: hsluv.hue,
    saturation: hsluv.saturation,
    colors,
  };
}
