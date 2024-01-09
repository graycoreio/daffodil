# @daffodil/router

Contains utilities useful for dealing with and adding features to the Angular router.

## Features

### Route Named Views
Adds the ability to define additional components in a `Route` config:
```ts
const routes = [
  <DaffRouteWithNamedViews>{
    ...
    data: {
      daffNamedViews: {
        key: MyComponent,
      },
    },
  },
]
```

Each component is associated with a key and can be rendered like so:
```html
<ng-container daffRouterNamedViewOutlet="key"></ng-container>
```
