# Daff Image Gallery Component

The daff image gallery component wraps img elements to display them in a gallery. It takes a list of imgs and an active image, and the selected image is controlled by the user. The position of the list of images changes depending on screen size.

Images need to be wrapped in daff-gallery-image components, so the images can be properly wrapped and sized. The active image should be the same as the selected image, and it needs to have the attribute `daff-active-image`.

## Daff Gallery Image Inputs

### select

```
- boolean added for the selected image
```

## Usage

```
<daff-image-gallery>
  <img daff-active-image src="{{selectedImage.url}}">
  <daff-gallery-image 
    *ngFor="let image of images"
    [selected]="image.url === selectedImage">

    <img alt="{{image.label}}"
      src="{{image.url}}" 
      (click)="selectedImage = image">

  </daff-gallery-image>
</daff-image-gallery>
```
