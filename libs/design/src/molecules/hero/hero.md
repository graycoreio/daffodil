# Hero Component

The `hero` component is a top level container that is large and captivating. It should only be used as the first container on any given page.

## Content Types
* A `hero` can include a title, subtitle, and image.

### Title
* Hero title is used by adding `<daff-hero-title>` to a `<h1>` tag.

### Subtitle
* Hero subtitle is used by adding `<daff-hero-subtitle>` to a `<h2>` tag.

## Colors
* To define a hero background color, add `color="[value]"` to the hero tag.
* Values: `primary`, `secondary`, `gray`, `black`, and `white`

## Sizing
* To define a hero size, add `size="[value]"` to the hero tag.
* Values: `fullscreen` and `small`

## Layout
* To define a hero layout, add `layout="[value]"` to the hero tag.
* Values: `centered` and `grid`

## Usage
```
<daff-hero color="primary" size="small" layout="centered">
  <h1 daff-hero-title>Hero Title</h1>
  <h2 daff-hero-subtitle>Hero subtitle</h2>
</daff-hero>
```

Grid layout

```
<daff-hero color="primary" size="fullscreen" layout="grid">
  <div>
    <h1 daff-hero-title>Hero Title</h1>
    <h2 daff-hero-subtitle>Hero subtitle</h2>
  </div>
  <div class="daff-hero__image"><img src="#" /></div>
</daff-hero>
```