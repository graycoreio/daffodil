# Media Gallery
Media gallery is used to display a group of thumbnails in a gallery format.

## Overview
Media galleries are useful to showcase multiple images related to a single product or topic.

## Usage

### Within a standalone component
To use media gallery in a standalone component, import `DAFF_MEDIA_GALLERY_COMPONENTS` directly into your custom component:

```ts
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
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
import { CustomComponent } from './custom.component';

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
`[daffThumbnail]` is a **structural** directive that can be used with any component that you would like to render inside your media gallery. You can set a value for the image for your element like:

```html
<daff-media-gallery>
  <ng-template daffThumbnail thumbnailSrc="/thumbnail-path.jpg" label="Your description">
    <daff-image src="/image-path.jpg" alt="Your description" width="100" height="100"></daff-image>
  </ng-template>
</daff-media-gallery>
```

It should never be used as a standalone component. The first thumbnail is selected by default and dynamically rendered as the primary image. The selected thumbnail can be controlled by the user, and the position of the list of thumbnails is dependent on the screen size.

<design-land-example-viewer-container example="basic-media-gallery"></design-land-example-viewer-container>

## Image aspect ratio
It's recommended to utilize the same aspect ratio for all images in the same media gallery. Otherwise, the height and width of the media gallery may change with every different aspect ratio presented by the selected thumbnail as show in the example.

The thumbnail dimension is set to a square, so the recommended aspect ratio is `1:1`. However, it is not required since the thumbnail will horizontally and vertically center align images within a thumbnail.

<design-land-example-viewer-container example="mismatched-sizes-media-gallery"></design-land-example-viewer-container>

## Accessibility
Accessibility considerations for media gallery is handled by the `DaffImageComponent`. The `alt` attribute must be defined in `<daff-image>`. It specifies an alternate text for an image. An error will appear if it's not defined. This is important because it allows screen readers to describe what's in the image for visually impaired people. See the [image documentation](/libs/design/image/README.md) for more information.