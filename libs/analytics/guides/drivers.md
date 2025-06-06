# Drivers

## Data layer
`@daffodil/analytics/driver/data-layer` is a data layer driver that enables you to push ecommerce and virtual pageview events to a `dataLayer` array, making it easy to track analytics events in your Angular application.

## Overview
- Pushes analytics events to a global `dataLayer` array.
- Supports ecommerce and virtual pageview event types.
- Designed to be used with the `@daffodil/analytics` event tracking system.

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
