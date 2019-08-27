import { DaffNavigationTree } from "../../../models/navigation-tree";
import { CategoryNode } from "../interfaces/category-node";

export const DaffMagentoCategoryTransformer = (node: CategoryNode) : DaffNavigationTree => {
  return {
    id: node.id,
    name: node.name,
    total_products: node.products.total_count,
    children_count: node.children_count,
    children: node.children.map(DaffMagentoCategoryTransformer)
  };
}
