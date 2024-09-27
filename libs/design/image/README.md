# Image
Image utilizes the native HTML `<img>` element to display responsive images on a page and prevent content jumping while images are loading. `<daff-image>` is an opinionated version that encourages friendly end-user usage.

<design-land-example-viewer-container example="load-image"></design-land-example-viewer-container>

## Attributes
The `src`, `width`, `height`, and `alt` attributes must be defined. An error will be thrown any of these attributes are missing.

`width` and `height` are required to calculate the aspect ratio of an image, used for the [aspect ratio padding trick](https://css-tricks.com/aspect-ratio-boxes/) that helps to prevent content jumping while images are loading. The `width` and `height` values are rendered as pixels.

## Usage

### Within a standalone component
To use image in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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

> This method is deprecated. It's recommended to update all custom components to standalone.

## Errors

**DaffImageComponent must have a defined src attribute.**
This error appears when `<daff-image>` is missing a `src` attribute.

**DaffImageComponent must have a defined alt attribute.**
This error appears when `<daff-image>` is missing an `alt` attribute. The `alt` tag specifies an alternate text for an image.

**DaffImageComponent must have a defined width attribute.**
This error appears when `<daff-image>` is missing a `width` attribute. The width must be defined in order to correctly calculate the aspect ratio of the image.

**DaffImageComponent must have a defined height attribute.**
This error appears when `<daff-image>` is missing a `height` attribute. The height must be defined in order to correctly calculate the aspect ratio of the image.

## Accessbility
Images should be given a meaningful description using the native `alt` attribute to ensure an accessible experience by default. An error will be thrown if the `alt` attribute is missing.
