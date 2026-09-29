# Daffodil Ecommerce Schematic

This Angular schematic adds Daffodil's ecommerce capabilities to existing Angular projects.

## Installation

```bash
ng add @daffodil/ecommerce
```

## Usage

The schematic will prompt you to configure:

- **Backend**: Choose between Magento GraphQL, in-memory (for development), or custom
- **Features**: Select which ecommerce features to include:
  - Shopping Cart
  - Product Catalog
  - Customer Authentication
  - Product Search
  - Checkout Process
  - Daffodil Design System Components
- **Routing**: Enable routing setup for ecommerce features

## Options

You can also run the schematic with specific options:

```bash
ng add @daffodil/ecommerce --backend=magento --features=cart,product-catalog,design-system
```

### Available Options

- `--project`: Target project name (defaults to default project)
- `--backend`: Backend type (`magento` | `in-memory` | `custom`)
- `--features`: Comma-separated list of features
- `--routing`: Enable routing setup (default: `true`)
- `--skip-package-json`: Skip updating package.json dependencies

### Available Features

- `cart`: Shopping cart functionality with state management
- `product-catalog`: Product listing and details with state management
- `customer-auth`: Customer authentication and account management
- `search`: Product search capabilities
- `checkout`: Checkout process and order management
- `design-system`: Daffodil UI components (buttons, cards, etc.)

## What it does

This schematic will:

1. **Add Dependencies**: Install necessary Daffodil packages based on selected features
2. **Configure Modules**: Add feature modules to your app-module.ts
3. **Setup State Management**: Configure NgRx stores for selected features
4. **Add Components**: Create basic component templates for selected features
5. **Configure Environment**: Setup environment configuration for your chosen backend
6. **Setup Routing**: Add routing configuration for ecommerce features (if enabled)

## Example

After running `ng add @daffodil/ecommerce` with cart and product-catalog features:

- Dependencies like `@daffodil/cart`, `@daffodil/product`, and `@ngrx/store` will be added
- Your `app-module.ts` will import `DaffCartStateModule` and `DaffProductStateModule`
- A basic `ProductListComponent` will be generated
- Environment configuration will be setup for your chosen backend

## Backend Configuration

### Magento
If you choose Magento backend, update your `environment.ts` with your Magento GraphQL endpoint:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://your-magento-store.com/graphql'
};
```

### In-Memory
The in-memory backend is great for development and testing. No additional configuration needed.

### Custom
If you choose custom backend, you'll need to implement the necessary driver services for your API.

## Development

To build this schematic package:

```bash
npm run build:schematics
```

To test locally:

```bash
npm link
ng new test-app
cd test-app
ng add @daffodil/ecommerce
```

## Driver Auto Versioning

This package export two builders which enable the application to use Daffodil auto versioned drivers.
Read more about driver auto versioning [here](/docs/guides/essentials/auto-versioning.md).

### Application Builder

This is the recommended way to use auto versioned drivers. `@daffodil/commerce:application` wraps `@angular/build:application` and allows a list of platform versions to be specified.
Daffodil will then, under the hood, select the driver versions that are applicable to that platform version.

```json
{
  ...
  "builder": "@daffodil/commerce:application",
  "options": {
    ...
    "drivers": {
      "magento": "2.4.7-p8"
    }
  }
}
```

Then import from the auto subpackage instead of a specific version.

```ts
import {...} from '@daffodil/<lib>/driver/magento/auto';
```

### Sync Builder

If the `@daffodil/commerce:application` builder does not meet the needs of the application then the commerce package provides a `@daffodil/commerce:sync` builder that will modify the builder configuration directly.

```json
{
  "architect": {
    "sync": {
      "builder": "@daffodil/commerce:sync",
      "options": {
        "drivers": {
          "magento": "2.4.7-p8"
        }
      }
    },
    "build": {
      ...
      "options": {
        ...
        "conditions": [...] // <-- this is what the sync builder creates
      }
    }
  }
}
```

It is then the responsibility of the app to run the sync builder anytime that the platform version changes.
