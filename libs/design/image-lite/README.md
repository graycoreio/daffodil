# Image Lite
Image lite applies Daffodil's image styling directly to a native `<img>` element.

## Overview
Image lite's main purpose is to handle the loading state of an image. It's a thin layer on top of Angular's [`NgOptimizedImage`](https://angular.dev/guide/image-optimization). `NgOptimizedImage` handles the performance work—lazy loading, preloading priority images, and requiring `width` and `height` so the browser can reserve space before the image loads.

<daff-docs-example-viewer example="basic-image-lite"></daff-docs-example-viewer>

## Usage

Import `DAFF_IMAGE_LITE_COMPONENTS` into your component:

```ts
import { Component } from '@angular/core';
import { DAFF_IMAGE_LITE_COMPONENTS } from '@daffodil/design/image-lite';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> `DAFF_IMAGE_LITE_COMPONENTS` includes `NgOptimizedImage`, so there's no need to import it separately.

## Anatomy
Add the `daff-image` attribute to an `<img>` and set the source with `ngSrc` instead of `src`:

```html
<img daff-image
  ngSrc="/assets/basel-exhibition-centre.jpg"
  alt="Bottom up view of Basel exhibition centre"
  width="1261"
  height="946"/>
```

## Required attributes

| Attribute | Description |
| --------- | ----------- |
| `ngSrc` | The image source URL. Replaces `src`; setting both throws an error. |
| `width` | The intrinsic width of the image in pixels. |
| `height` | The intrinsic height of the image in pixels. |

`ngSrc`, `width`, and `height` are required by `NgOptimizedImage` and will throw an error if missing. `alt` is not enforced, but should always be set. See [Accessibility](#accessibility).

## Features

### Skeleton screen
Use the `skeleton` property to display a placeholder skeleton screen that helps reduce load-time frustration. The skeleton fills the space the image will occupy, so `width` and `height` still need to be set.

<daff-docs-example-viewer example="skeleton-image-lite"></daff-docs-example-viewer>

## Accessibility
Provide concise, meaningful descriptions that convey the content and purpose of the image by using the `alt` attribute.
