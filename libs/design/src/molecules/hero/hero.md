# Hero
`DaffHeroComponent` is a top level container that is large and captivating. It should only be used as the first container on any given page. It supports transcluding any content and optionally including a predefined `title` and `subtitle`.

## Supported Content Types
A `daff-hero` transcludes:
- `[daffHeroTitle]`
- `[daffHeroSubtitle]`
- Any additional components

### Title
- Hero title is used by adding `<daffHeroTitle>` to a `<h1>` tag.

### Subtitle
- Hero subtitle is used by adding `<daffHeroSubtitle>` to a `<h2>` tag.

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
