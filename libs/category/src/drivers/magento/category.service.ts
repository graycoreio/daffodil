import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { DaffCategory } from '../../models/category';
import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';

interface GetACategoryResponse {
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

export const GetACategory = gql`
  query GetACategory($id: ID!){
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

export const DaffMagentoCategoryTransformer = (node: CategoryNode) : DaffCategory => {
  let category: DaffCategory = {
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
export class DaffMagentoCategoryService implements DaffCategoryServiceInterface {

  defaultLength = 20;
  
  constructor(private apollo: Apollo) {}

  get(categoryId: string): Observable<DaffCategory> {
    return this.apollo.query<GetACategoryResponse>({
      query: GetACategory,
      variables: {
        id: categoryId
      }
    }).pipe(
      map(result => DaffMagentoCategoryTransformer(result.data.category))
    );
  }
}
