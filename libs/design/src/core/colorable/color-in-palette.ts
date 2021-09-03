import { DaffPaletteEnum } from './colorable-enum';

export function colorInPalette(color: string): boolean{
  return (<any>Object).values(DaffPaletteEnum).includes(color);
}
