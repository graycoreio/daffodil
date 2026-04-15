# Card
A card is a flexible content container used to group related information and actions about a single subject.

## Overview
Cards help organize and present information in a clear and visually appealing way. There are two styles: **default (filled)** and **stroked**, and can include images, text, lists, actions, or even other components.

<daff-docs-example-viewer example="basic-cards"></daff-docs-example-viewer>

## Best practices

**When to use**
- Displaying collections of related content (products, articles, etc.)
- Presenting information that users need to compare
- Showing preview information that links to more detail

## Usage

Import the card style(s) you need into your component:

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

> **Deprecation notice:**
> 
> `DaffCalloutModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A card is composed of a container, image, icon, tagline, title, content, and actions, displayed in the order listed:

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

**`<daff-card>`** or **`<daff-stroked-card>`**\
The wrapper component that holds all card content.

**`[daffCardImage]`**\
Image element at the top of the card.

**`[daffCardIcon]`**\
Displays a visual or branding element. Avoid using for interactive icons.

**`[daffCardTagline]`**\
Short phrase that provides quick context.

**`[daffCardTitle]`**\
The primary heading of the card.

**`[daffCardContent]`**\
Flexible container for body text or custom content. It's unstyled except for spacing and **should only be used once per card**.

**`[daffCardActions]`**\
Container for buttons or links, positioned at the bottom.

## Features

### Interactive card
An interactive card turns the entire card into a clickable area that navigates to another page or view. This is useful for cards representing products, articles, or other resources where selecting the card should take the user to another page or section.

To create an interactive card, apply the component selector to an `<a>` element. All card styles support interactive behavior.

<daff-docs-example-viewer example="linkable-card"></daff-docs-example-viewer>

### Colors
Cards default to a light gray background. Use the `color` property to change a card's color.

<daff-docs-example-viewer example="card-theming"></daff-docs-example-viewer>


### Elevation
Use the `elevated` property to add shadows to cards.

<daff-docs-example-viewer example="elevated-card"></daff-docs-example-viewer>

### Orientation
Use the `orientation` property to stack card content either `vertical` (default) or `horizontal`. Horizontal cards automatically switch to vertical on smaller screens.

<daff-docs-example-viewer example="card-orientation"></daff-docs-example-viewer>