# Image
`<daff-image>` uses the native HTML `<img>` tag to place responsive images on a page. It helps to prevent content jumping while images are loading.

## Attributes
The `alt`, `width`, and `height` attributes must be defined. If they are not defined, errors will appear.

`width` and `height` are necessary to calculate the aspect ratio of an image, used for the [aspect ratio padding trick](https://css-tricks.com/aspect-ratio-boxes/) that helps to prevent content jumping while images are loaded.

## Errors

### DaffImageComponent must have a defined alt attribute.
This error appears when `<daff-image>` is missing an `alt` attribute. The `alt` tag specifies an alternate text for an image.

### DaffImageComponent must have a defined width attribute.
This error appears when `<daff-image>` is missing a `width` attribute. The width must be defined in order to correctly calculate the aspect ratio of the image.

### DaffImageComponent must have a defined height attribute.
This error appears when `<daff-image>` is missing a `height` attribute. The height must be defined in order to correctly calculate the aspect ratio of the image.

## Usage
`<daff-image src="/assets/card/uber-logo.svg" alt="Uber Logo" width="300" height="119"></daff-image>`