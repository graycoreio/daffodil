import { DaffNavigationTree } from "../../../models/navigation-tree";
import { CategoryNode } from "../interfaces/category-node";

export const DaffMagentoCategoryTransformer = (node: CategoryNode) : DaffNavigationTree => {
  const category: DaffNavigationTree = {
    id: node.id,
    name: node.name,
    total_products: node.products.total_count,
    children_count: node.children_count
  };
  for(let i=0; i<node.children.length; i++) {
    (category.children = category.children || []).push(DaffMagentoCategoryTransformer(node.children[i]));
  }
  
  return category;
}
