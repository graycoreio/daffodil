# Hero
`DaffHeroComponent` is a top level container that is large and captivating. It should only be used once as the first container on any given page. It supports transcluding any content and optionally including a predefined `tagline`, `title` and `subtitle`.

## Supported Content Types
A `daff-hero` transcludes:
- `[daffHeroTitle]`
- `[daffHeroSubtitle]`
- Any additional components

### Title
- Hero title is used by adding `<daffHeroTitle>` to a `<h1>` tag.

### Subtitle
Hero subtitle is used by adding `daffHeroSubtitle` to a `<h2>` tag.

## Theming
The hero's background color is defined by using the `color` property. By default, the color is set to `theme`. This can be changed to one of the supported colors.

Supported colors: `primary, secondary, tertiary, black, white, theme, and theme-contrast`

## Colors
- To define a hero background color, add `color="[value]"` to the hero tag.
- Values: `primary`, `secondary`, `tertiary`, and `black`, and `white`

## Size
- The `size` property will be deprecated in v1.0.0

## Layout
- The `size` property will be deprecated in v1.0.0


## Usage
```
<daff-hero color="primary">
  <h1 daffHeroTitle>Hero Title</h1>
  <h2 daffHeroSubtitle>Hero subtitle</h2>
</daff-hero>
```
