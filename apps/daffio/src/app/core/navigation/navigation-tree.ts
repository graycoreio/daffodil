export interface DaffioNavigationTree {
  id: string;
  children: DaffioNavigationTree[],
  title: string;
  path?: string;
}