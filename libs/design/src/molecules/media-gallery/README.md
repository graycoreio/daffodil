# Media Gallery
`<daff-media-gallery>` is used to display a group of `[daffThumbnail]`s in a gallery format. Media galleries are useful to showcase multiple images related to a single product or topic.

## Thumbnail
`[daffThumbnail]` should be used as a directive with `<daff-image>`. [View Image Documentation](/libs/design/src/atoms/image/README.md)

It should never be used as a standalone component. The first thumbnail is selected by default and dynamically rendered as the primary image by utilizing the `<daff-media-renderer>` component. The selected thumbnail can be controlled by the enduser, and the position of the list of thumbnails is dependent on the screen size.

<design-land-example-viewer-container example="basic-media-gallery"></design-land-example-viewer-container>

## Image Aspect Ratio
It's recommended to utilize the same aspect ratio for all images in the same media gallery. Otherwise, the height and width of the media gallery may change with every different aspect ratio presented by the selected thumbnail as show in the example.

The thumbnail dimension is set to `80x80` pixels, so the recommended aspect ratio is `1:1`. However, it is not required since the thumbnail will horizontally and vertically center align images within a thumbnail.

<design-land-example-viewer-container example="mismatched-sizes-media-gallery"></design-land-example-viewer-container>

## Accessibility
Accessibility considerations for media gallery is handled by the `DaffImageComponent`. The `alt` attribute must be defined in `<daff-image>`. It specifies an alternate text for an image. An error will appear if it's not defined. This is important because it allows screen readers to describe what's in the image for visually impaired people. [View Image Documentation](/libs/design/src/atoms/image/README.md)