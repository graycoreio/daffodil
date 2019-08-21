import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { DaffNavigationTree } from '../../models/navigation-tree';
import { DaffNavigationServiceInterface } from '../interfaces/navigation-service.interface';

interface GetCategoryTreeResponse {
  category?: CategoryNode
}

interface CategoryNode {
  id: string;
  name?: string;
  products?: CategoryProductNode;
  level?: number;
  children_count?: number;
  children?: CategoryNode[];
}

interface CategoryProductNode {
  total_count: number;
}

export const GetCategoryTree = gql`
  query GetCategoryTree($id: ID!){
    category(id: $id) {
      id
      name
      products {
        total_count
      }
      children_count
      children {
        id
        level
        name
        path
      }
    }
  }
`;

export const DaffMagentoCategoryTransformer = (node: CategoryNode) : DaffNavigationTree => {
  const category: DaffNavigationTree = {
    id: node.id,
    name: node.name,
    total_products: node.products.total_count,
    children_count: node.children_count
  };
  for(let i=0; i>node.children.length; i++) {
    category.children.push(DaffMagentoCategoryTransformer(node.children[i]));
  }
  
  return category;
}

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.apollo.query<GetCategoryTreeResponse>({
      query: GetCategoryTree,
      variables: {
        id: categoryId
      }
    }).pipe(
      map(result => DaffMagentoCategoryTransformer(result.data.category))
    );
  }
}
