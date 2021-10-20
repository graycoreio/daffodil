# Hero
Hero is a top level container that is large and captivating. It should only be used once as the first container on any given page.

## Supported Content Types
A `daff-hero` supports transclusion of any content and includes stylized `icon`, `tagline`, `title` and `subtitle` content containers.

| Selector             | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `[daffHeroIcon]`     | Hero icon, intended for visual or branding reinforcement                               |
| `[daffHeroTagline]`  | Hero tagline                                                                           |
| `[daffHeroTitle]`    | Hero title, used with the `<h1>` tag                                                   |
| `[daffHeroSubtitle]` | Hero subtitle, used with the `<h2>` tag                                                |
| `[daffHeroBody]`     | Container for any additional content, it will not respect the `textAlignment` property |

## Theming
The default background color of a hero is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="hero-theming"></design-land-example-viewer-container>

## Text Alignment
Align hero-specific text with the `textAlignment` property. `textAlignment` will not cascade the alignment styles down to `[daffHeroBody]` or any additional components or elements that are placed inside of a hero.

Supported alignments: `left | center | right`

<design-land-example-viewer-container example="hero-text-alignment"></design-land-example-viewer-container>

## Gridded Hero
Heros are flexible enough to support grids within them.

### Two Column Grid Hero
<design-land-example-viewer-container example="hero-with-grid"></design-land-example-viewer-container>

## Size
The `size` property will be deprecated in v1.0.0. `compact` will be replaced by the `DaffCompactable` interface.

## Layout
The `layout` property will be deprecated in v1.0.0
