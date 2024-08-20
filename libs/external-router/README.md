# @daffodil/external-router
`@daffodil/external-router` extends `@angular/router` and allows you to render routes defined in external systems like Wordpress, Magento, Contentful, etc, as if you had defined the routes statically in your Angular `Routes`.

## Overview
It's useful when you are trying to generate "user-friendly" routes in external applications and want to resolve them by their "user-friendly" uri, like `sweatshirts`, instead of paths such as `category/6` or `category/sweatshirts`.

## Installation
To install `@daffodil/external-router` and its dependencies, use the following commands in the terminal.

Install with npm:
```bash
npm install @daffodil/external-router @daffodil/core --save
```

Install with yarn:
```bash
yarn add @daffodil/external-router @daffodil/core
```

## Usage
As an example scenario, you could:

1. Define a page with a "user-friendly" url, e.g. `sweatshirts` in an external service like Magento
2. Use the `@daffodil/external-router/driver` to make calls to the Magento instance's URL Resolver
3. Navigate to `www.your-domain.com/sweatshirts` and render the appropriate components for the blog post.
