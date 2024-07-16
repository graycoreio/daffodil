export enum DaffDocsPaletteColorKind {
  GROUP = 'GROUP',
  SINGLE = 'SINGLE'
}

export interface DaffDocsPaletteGroup {
  kind: DaffDocsPaletteColorKind.GROUP;
  shades: Record<string, string>;
}

export interface DaffDocsPaletteSingle {
  kind: DaffDocsPaletteColorKind.SINGLE;
  value: string;
}

export type DaffDocsPaletteColor = DaffDocsPaletteSingle | DaffDocsPaletteGroup;

export type DaffDocsPalette = Record<string, DaffDocsPaletteColor>;
