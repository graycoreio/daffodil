# `@daffodil/seo/state`

## Angular Router Page Hooks

In addition to the services in `@daffodil/seo`, `@daffodil/seo/state` provides mechanisms for hooking into the Angular router navigation flow with respect to SEO updates. Application features can define behavior for getting SEO data in response to particular state actions by providing to SEO feature-specific injection tokens. The Daffodil effects for this feature have the following behaviors:

- Listens for provided action types. If a provided action is encountered, the effect will invoke the corresponding provided `getInfo` function and pass that return to the SEO service to add to the page.
- When Angular router navigation starts, the SEO service is invoked to remove the SEO info from the page.
- If navigation is canceled, the most recent SEO info is readded to the page.

### Example

The following example demonstrates adding canonical URLs on a category page in response to the category page load success action.

```ts
@NgModule({
  imports: [
    DaffSeoStateModule,
    DaffCategoryStateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'category/:id',
        component: CategoryPageComponent,
        resolve: {
          category: DaffCategoryPageIdResolver,
        },
      },
    ]),
  ],
  providers: [
    ...daffProvideCanonicalUrlUpdates(
      {
        action: DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction,
        getInfo: (action: DaffCategoryPageLoadSuccess) => action.response.category.url,
      },
    ),
  ],
})
export class AppModule {}
```
