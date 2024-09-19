# @daffodil/router
`@daffodil/router` contains utilities useful for dealing with and adding features to the Angular router.

## Installation
To install `@daffodil/router`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/router --save
```

Install with yarn:

```bash
yarn add @daffodil/router
```

## Features

### Route named views
Route named views adds the ability to define additional components in a `Route` config:

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
