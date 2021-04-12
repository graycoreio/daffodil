# Card
The card is a flexible content container that supports multiple content types used in the context of a single subject.

## Basic Card
The example below is a basic card with the default color and a fixed width. Cards naturally do not have a fixed width, so they'll fill the full width of its parent element. Widths of cards can be defined by its parent element.

<design-land-example-viewer-container example="basic-card"></design-land-example-viewer-container>

## Linkable Card
Cards can be linkable by adding the component selector to the <code>&lt;a&gt;</code> tag.

<design-land-example-viewer-container example="linkable-card"></design-land-example-viewer-container>

## Supported Content Types
A `<daff-card>` can transclude:
- `[daffCardMedia]` - Container for media content like image or video 
- `[daffCardTagline]` — Card tagline
- `[daffCardTitle]` — Card title
- `[daffCardActions]` — Container for buttons positioned at the bottom of a card
- Any additional text and components will be placed between title and actions

## Properties

### Raised
The raised property adds elevation to a card and can be defined by using the `raised` property.

<design-land-example-viewer-container example="raised-card"></design-land-example-viewer-container>

### Theming
The color of a card background or border can be defined by using the `color` property. There's no default color property defined, and if one is not defined in its usage, the card background will display the base color of the application.

Supported colors: `primary | secondary | tertiary | white | black | theme | theme-contrast`

<design-land-example-viewer-container example="card-theming"></design-land-example-viewer-container>

## Usage Example
``` html
<daff-card>
  <img daffCardMedia src="#" />
  <p daffCardTagline>Card Tagline</p>
  <h4 daffCardTitle>Card Title</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</daff-card>
```
