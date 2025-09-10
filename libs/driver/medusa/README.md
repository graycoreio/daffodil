# @daffodil/driver/medusa

A Daffodil product driver for integrating with [Medusa](https://medusajs.com/) e-commerce platform.

## Overview

This driver provides integration between Daffodil's product interfaces and Medusa's product API. It transforms Medusa product data into Daffodil's standardized product format.

## Installation

```bash
npm install @daffodil/driver --save
```

## Configuration

Configure the driver by providing a `DaffMedusaConfig` object:

```ts
import { provideHttpClient } from '@angular/common/http';
import {
	provideDaffProductMedusaDriver,
	DaffMedusaConfig,
} from '@daffodil/driver/medusa';

const medusaConfig: DaffMedusaConfig = {
	api_url: 'https://your-medusa-api/store',
	publishableApiKey: 'your-publishable-api-key',
};

// In your app module or standalone bootstrap
providers: [
  provideHttpClient(),
  provideDaffProductMedusaDriver(medusaConfig)
];
```
