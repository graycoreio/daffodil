# @daffodil/analytics/driver/data-layer

`@daffodil/analytics/driver/data-layer` provides a data layer driver for Daffodil Analytics. It enables you to push ecommerce and virtual pageview events to a `dataLayer` array, making it easy to track analytics events in your Angular application.

## Installation
To install `@daffodil/analytics`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/analytics --save
```

Install with yarn:
```bash
yarn add @daffodil/analytics
```

## Overview
- Pushes analytics events to a global `dataLayer` array.
- Supports ecommerce and virtual pageview event types.
- Designed for use with the Daffodil Analytics event tracking system.
- **Server-side safe:** Can be used with Angular Universal.

## Usage
Import the driver and use the provided services and types to push events to the data layer:

```ts
import { DaffAnalyticsDataLayer, provideDaffDataLayerTracker } from '@daffodil/analytics/driver/data-layer';

@NgModule({
  providers: [
    provideDaffDataLayerTracker(action => ({ ecommerce: { /* ... */ } }))
  ]
})
export class AppModule {}
```

## Exports
- `DaffAnalyticsDataLayer`: Service for pushing events to the data layer.
- `provideDaffDataLayerTracker`: Factory provider for integrating with Daffodil Analytics.
- `DaffDataLayer`, `DaffDataLayerItem`, `DaffEcommerceDataLayer`, `DaffVirtualPageViewDataLayer`, etc.: Types for data layer events.
