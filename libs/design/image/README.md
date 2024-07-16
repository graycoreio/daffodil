# Image
Image utilizes the native HTML `<img>` element to display responsive images on a page and prevent content jumping while images are loading. `<daff-image>` is an opinionated version that encourages friendly end-user usage.

## Attributes
The `src`, `width`, `height`, and `alt` attributes must be defined. An error will be thrown any of these attributes are missing.

`width` and `height` are required to calculate the aspect ratio of an image, used for the [aspect ratio padding trick](https://css-tricks.com/aspect-ratio-boxes/) that helps to prevent content jumping while images are loading. The `width` and `height` values are rendered as pixels.

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

## Usage
### Basic Image
<daff-docs-example-viewer-container-ce example="load-image"></daff-docs-example-viewer-container-ce>

### Image Load Output
<daff-docs-example-viewer-container-ce example="load-image"></daff-docs-example-viewer-container-ce>