export interface DaffDoc {
  id: string;
  title: string;
  contents: string;
  tableOfContents?: {
    json: {
      content: string;
      lvl: number;
      slug: string;
    }[];
  };
}
