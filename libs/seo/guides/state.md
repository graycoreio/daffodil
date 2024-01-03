# `@daffodil/seo/state`

## Angular Router Page Hooks

Applications have the following SEO requirements with regards to navigation:
- Adding SEO data to the page in response to arbitrary redux actions during navigation.
- Removing added SEO data when navigating to new pages.
- Preserving added SEO data when navigation fails.

In addition to the services in `@daffodil/seo`, `@daffodil/seo/state` provides mechanisms for hooking into the Angular router navigation flow with respect to SEO updates. Application features can define behavior for getting SEO data in response to particular state actions by providing to SEO feature-specific injection tokens.

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
        getData: (action: DaffCategoryPageLoadSuccess) => action.response.category.url,
      },
    ),
  ],
})
export class AppModule {}
```
