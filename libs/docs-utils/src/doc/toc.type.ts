export interface DaffDocTableOfContentsEntry {
  content: string;
  lvl: number;
  slug: string;
}

export type DaffDocTableOfContents = Array<DaffDocTableOfContentsEntry>;
