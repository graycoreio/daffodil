# Hero
Hero is a top level container that is large and captivating. It should only be used once as the first container on any given page.

## Overview
Heros are the first thing users see on a page and are designed to catch their attention. It's a flexible and extensible component that includes pre-styled content containers.

## Supported Content Types
A `daff-hero` supports transclusion of any content and includes stylized `icon`, `tagline`, `title`, `subtitle`, and `body` content containers.

### Icon
`[DaffHeroIcon]` is intended for visual or branding reinforcement. It should not be used for actionable icons.

### Tagline
Hero taglines are used by adding `[daffHeroTagline]` to a `<p>` tag. It's intended to supplement the title by providing a short, memorable description.

### Title
Hero titles are used by adding `[daffHeroTitle]` to a `<h1>` tag.

### Subtitle
Hero subtitles are used by adding `[daffHeroSubtitle]` to a `<h2>` tag.

### Body
`[daffHeroBody]` is a wrapper container that can be used to place all additional components and content within a `<daff-hero>` and should only be used once. The body container allows for a ton of control and customization because it's not affected by any of hero's properties and only serves as a wrapping and spacing container.

## Theming
The default background color of a hero is light gray, but it can be updated to one of the supported colors by using the `color` property.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="hero-theming"></design-land-example-viewer-container>

## Text Alignment
Align hero-specific text with the `textAlignment` property. `textAlignment` will not cascade the alignment styles down to `[daffHeroBody]` or any additional components or elements that are placed inside of a hero. `textAlignment` is set to `left` by default.

Supported alignments: `left | center | right`

<design-land-example-viewer-container example="hero-text-alignment"></design-land-example-viewer-container>

## Compact Heroes
Heroes are available in a `compact` mode, which decreases the overall padding of the hero container to suit UIs that require less negative space. To enable the mode, set the `compact` property on `<daff-hero>`.</p>

<design-land-example-viewer-container example="compact-hero"></design-land-example-viewer-container>

## Gridded Heroes
Heros are flexible enough to support grids within them.

### Hero with Two Columns
<design-land-example-viewer-container example="hero-with-grid"></design-land-example-viewer-container>

## Size
The `size` property will be deprecated in v1.0.0. `compact` will be replaced by the `DaffCompactable` interface.

## Layout
The `layout` property will be deprecated in v1.0.0
