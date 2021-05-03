# Hero
`DaffHeroComponent` is a top level container that is large and captivating. It should only be used once as the first container on any given page. It supports transclusion of any content and includes predefined `tagline`, `title` and `subtitle` styles.

## Supported Content Types
A `daff-hero` can transclude:
- `[daffHeroTagline]` - Hero tagline
- `[daffHeroTitle]` - Hero title, used with the `<h1>` tag
- `[daffHeroSubtitle]` - Hero subtitle, used with the `<h2>` tag
- Any additional components

## Theming
The default background color of a hero is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="hero-theming"></design-land-example-viewer-container>

## Size
- The `size` property will be deprecated in v1.0.0. `compact` will be replaced by the `DaffCompactable` interface.

## Layout
- The `layout` property will be deprecated in v1.0.0
