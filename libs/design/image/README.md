# Image
Image has built-in performance and accessibility optimizations that allow users to easily display responsive images.

## Overview
Image builds on Angular's [`NgOptimizedImage`](https://angular.dev/guide/image-optimization) to provide responsive images with stable layouts out of the box. It helps to avoid common image-related performance and accessibility issues by:

- Preventing layout shift with required `width` and `height` attributes
- Ensuring accessibility by requiring descriptive `alt` text
- Maintaining proper aspect ratios for responsive designs

<daffio-example-viewer example="basic-image"></daffio-example-viewer>

## Usage

### Within a standalone component
To use image in a standalone component, import `DAFF_IMAGE_COMPONENTS` directly into your custom component:

```ts
import { Component } from '@angular/core';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use image in a module, import `DaffImageModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffImageModule } from '@daffodil/design/image';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffImageModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Required attributes
All four of the following attributes are required and will throw an error if missing:

| Attribute | Description |
| --------- | ----------- |
| `src` | The image source URL |
| `alt` | Alternative text describing the image |
| `width` | The intrinsic width of the image in pixels |
| `height` | The intrinsic height of the image in pixels |

## Features

## Skeleton screen
Use the `skeleton` property to display a placeholder skeleton screen that helps reduce load-time frustration.

<daffio-example-viewer example="skeleton-image"></daffio-example-viewer>

## Priority loading
Use the `priority` property to mark an image as a priority for loading. Priority images are loaded eagerly and not lazy-loaded.

## Accessibility
Provide concise, meaningful descriptions that convey the content and purpose of the image by using the `alt` attribute. An error will be thrown if `alt` is missing.