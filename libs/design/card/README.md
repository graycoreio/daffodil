# Card
Cards are versatile content containers that contain content and actions to convey information about a single subject.

## Overview
There are three types of cards: default (filled), raised, and stroked. Cards can contain anything from images, blocks of text, lists, accordions, and other components.

## Basic Card
The example below is a default, filled card that includes all of a card's pre-styled elements and a fixed width. Cards naturally do not have a fixed width, so they'll be 100% wide by default. The width is changeable with custom CSS

<design-land-example-viewer-container example="basic-card"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use card in a standalone component, import it directly into your custom component.

The following imports are available, depending on which card you choose to use: `DAFF_CARD_COMPONENTS`, `DAFF_RAISED_COMPONENTS`, `DAFF_STROKED_CARD_COMPONENTS`. If you need to use all the card types, you can use `DAFF_ALL_CARD_COMPONENTS`.

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_CARD_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use card in a module, import `DaffCardModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffCardModule } from '@daffodil/design/card';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffCardModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Supported Content Types
A card supports a wide variety of content and includes minimally pre-styled `image`, `icon`, `tagline`, `title`, `content`, and `actions` content containers.

### Image
Image can be added to a card by using the `daffCardImage` attribute. It stretches the image to a card's defined width and ensures that its border radius is flush with a card.

### Icon
Icon can be added to a card by using the `daffCardIcon` attribute. It's intended for visual or branding reinforcement and should not be used for actionable icons.

### Tagline
Tagline can be added to a card by using the `daffCardTagline` attribute. It's intended to supplement the title by providing a short, memorable description.

### Title
Title can be added to a card by using the `daffCardTitle` attribute.

### Content
Content can be added to a card by using the `daffCardContent` attribute and should only be used once. It's a wrapper container that can be used to place all additional components and text content within a card. The content container allows for a ton of control and customization because it's not affected by any of card's properties and only serves as a wrapping and spacing container.

### Actions
Buttons can be added to a card by using the `daffCardActions` attribute. This container will always be positioned at the bottom of a card.

## Properties

### Orientation
Orientation dictates how a card's content is stacked — `vertical` or `horizontal`. Cards are oriented vertically by default. The orientation of a card can be defined or updated by using the `orientation` property. Horizontal cards will stack vertically on smaller screens due to size constraints.

<design-land-example-viewer-container example="card-orientation"></design-land-example-viewer-container>

## Linkable Card
Cards can be linkable by adding the component selector to the `<a>` tag. All card types are linkable.

<design-land-example-viewer-container example="linkable-card"></design-land-example-viewer-container>

## Raised Card
A raised card adds elevation to the default card.

<design-land-example-viewer-container example="raised-card"></design-land-example-viewer-container>

## Stroked Card
A stroked card adds a border to the default card.

<design-land-example-viewer-container example="stroked-card"></design-land-example-viewer-container>

### Theming
Cards will use the base color of your application to display the default background and/or border color. A card's colors can be defined by using the `color` property.

Supported colors: `primary | secondary | tertiary | white | black | theme | theme-contrast`

<design-land-example-viewer-container example="card-theming"></design-land-example-viewer-container>
