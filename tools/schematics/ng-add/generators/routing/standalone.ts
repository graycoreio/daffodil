import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';

/**
 * Updates or creates standalone app routing configuration (app.routes.ts).
 *
 * @param routingFilePath - Path to the app.routes.ts file
 * @returns A Rule that updates the routing configuration
 */
export function updateStandaloneRouting(routingFilePath: string): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const routingSource = tree.read(routingFilePath);

    // Create standalone routes file
    const routingContent = `import { Routes } from '@angular/router';
import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';
import { ProductPageComponent } from './daff/product/components/product-page/product-page.component';
import { productResolver } from './daff/product/resolvers/product.resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./daff/pages/home/home.component').then(m => m.HomeComponent) },
  {
    path: '**',
    component: ProductPageComponent,
    canMatch: [daffExternalMatcherTypeGuard('PRODUCT')],
    resolve: { product: productResolver }
  },
  { path: '**', loadComponent: () => import('./daff/pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
`;

    if (!routingSource) {
      tree.create(routingFilePath, routingContent);
    } else {
      tree.overwrite(routingFilePath, routingContent);
    }

    return tree;
  };
}
