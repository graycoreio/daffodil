# Media Gallery
Media gallery is used to display a group of thumbnails in a gallery format.

## Overview
Media galleries are useful to showcase multiple images related to a single product or topic.

## Usage

### Within a standalone component
To use media gallery in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use media gallery in a module, import `DaffMediaGalleryModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffMediaGalleryModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Thumbnail
`[daffThumbnail]` should be used as a directive with `<daff-image>`. [View Image Documentation](/libs/design/image/README.md)

It should never be used as a standalone component. The first thumbnail is selected by default and dynamically rendered as the primary image by utilizing the `<daff-media-renderer>` component. The selected thumbnail can be controlled by the enduser, and the position of the list of thumbnails is dependent on the screen size.

<design-land-example-viewer-container example="basic-media-gallery"></design-land-example-viewer-container>

## Image Aspect Ratio
It's recommended to utilize the same aspect ratio for all images in the same media gallery. Otherwise, the height and width of the media gallery may change with every different aspect ratio presented by the selected thumbnail as show in the example.

The thumbnail dimension is set to `80x80` pixels, so the recommended aspect ratio is `1:1`. However, it is not required since the thumbnail will horizontally and vertically center align images within a thumbnail.

<design-land-example-viewer-container example="mismatched-sizes-media-gallery"></design-land-example-viewer-container>

## Accessibility
Accessibility considerations for media gallery is handled by the `DaffImageComponent`. The `alt` attribute must be defined in `<daff-image>`. It specifies an alternate text for an image. An error will appear if it's not defined. This is important because it allows screen readers to describe what's in the image for visually impaired people. [View Image Documentation](/libs/design/image/README.md)