export interface DaffioPackagesList {
  id: string;
  title: string;
  path?: string;
  children?: DaffioPackagesList[];
}


