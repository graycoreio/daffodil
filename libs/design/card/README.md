# Card
A card is a flexible content container used to group related information and actions about a single subject.

## Overview
Cards help organize and present information in a clear and visually appealing way. There are two styles: **default (filled)** and **stroked**, and can include images, text, lists, actions, or even other components.

**Default (filled) card**
<design-land-example-viewer-container example="basic-card"></design-land-example-viewer-container>

**Stroked card**
<design-land-example-viewer-container example="stroked-card"></design-land-example-viewer-container>

## Best practices

**When to use**
- Displaying collections of related content (products, articles, etc.)
- Presenting information that users need to compare
- Showing preview information that links to more detail

## Usage

### Within a standalone component
Import the card style(s) you need into a standalone component:

Available imports:
- Default (filled) cards: `DAFF_CARD_COMPONENTS`
- Stroked cards: `DAFF_STROKED_CARD_COMPONENTS`
- All card styles: `DAFF_ALL_CARD_COMPONENTS`

```ts
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
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
import { CustomComponent } from './custom.component';

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

## Anatomy
A card consists of the following components, displayed in the order listed:

### Container
**`<daff-card>`** or **`<daff-stroked-card>`**: The main wrapper that holds all card content.

### Image
**`[daffCardImage]`**: Image element at the top of the card.

### Icon
**`[daffCardIcon]`**: Displays a visual or branding element. Avoid using for interactive icons.

### Tagline
**`[daffCardTagline]`**: Short phrase that provides quick context.

### Title
**`[daffCardTitle]`**: The primary heading of the card.

### Content
**`[daffCardContent]`**: Flexible container for body text or custom content. It's unstyled except for spacing and should only be used once per card.

### Actions
**`[daffCardActions]`**: Container for buttons or links, positioned at the bottom.

### Basic structure
```html
<daff-card>
  <img daffCardImage src="/product.jpg" alt="Product image">
  <div daffCardIcon>
    <fa-icon [icon]="faStar"></fa-icon>
  </div>
  <div daffCardTagline>New Arrival</div>
  <h4 daffCardTitle>Product Name</h4>
  <div daffCardContent>
    <p>Product description and details.</p>
  </div>
  <div daffCardActions>
    <button>View Details</button>
    <button>Add to Cart</button>
  </div>
</daff-card>
```

## Features

### Interactive card
An interactive card turns the entire card into a clickable area that navigates to another page or view. This is useful for cards representing products, articles, or other resources where selecting the card should take the user to another page or section.

To create an interactive card, apply the component selector to an `<a>` element. All card styles support interactive behavior.

<design-land-example-viewer-container example="linkable-card"></design-land-example-viewer-container>

### Elevation
Use the `elevated` property to add shadows to cards.

<design-land-example-viewer-container example="elevated-card"></design-land-example-viewer-container>

### Orientation
Use the `orientation` property to stack card content either `vertical` (default) or `horizontal`. Horizontal cards automatically switch to vertical on smaller screens.

<design-land-example-viewer-container example="card-orientation"></design-land-example-viewer-container>

### Colors
Cards default to a light gray background. Use the `color` property to change a card's color.

<design-land-example-viewer-container example="card-theming"></design-land-example-viewer-container>

## Deprecations
The raised card style has been deprecated in favor of the `elevated` property. Replace `<daff-raised-card>` with `<daff-card [elevated]="true">`

```html
<daff-card [elevated]="true">
</daff-card>
```