# Card
Cards are flexible content containers used to group related information and actions about a single subject.

## Overview
Daffodil provides two card styles: **default (filled)** and **stroked**. Cards can include images, text, lists, actions, or even other components.

**Default (filled) card**
<design-land-example-viewer-container example="basic-card"></design-land-example-viewer-container>

**Stroked card**
<design-land-example-viewer-container example="stroked-card"></design-land-example-viewer-container>

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
Cards include minimally styled content containers for common patterns. Each container is optional but is projected in the order listed below:

- **`[daffCardImage]`**: Displays an image.
- **`[daffCardIcon]`**: Displays a visual or branding element. Avoid using this for interactive or actionable icons.
- **`[daffCardTagline]`**: Short, memorable phrase that complements the title and provides quick context.
- **`[daffCardTitle]`**: The primary heading of the card.
- **`[daffCardContent]`**: A flexible wrapper for text, components, or custom layouts. It's unstyled except for spacing and should only be used once per card.
- **`[daffCardActions]`**: A container for buttons or calls-to-action, always positioned to the bottom of the card.

```html
<daff-card>
	<img daffCardImage src="/" alt="image caption" >
  <div daffCardIcon></div>
  <div daffCardTagline>Card tagline</div>
  <h4 daffCardTitle>Card title</h4>
	<div daffCardContent>Detailed information about the subject of the card.</div>
  <div daffCardActions>
    <button>Card link</button>
    <button>Another card link</button>
  </div>
</daff-card>
```

## Interactive card
An interactive card turns the entire card into a clickable area that navigates to another page or view. This is useful for cards representing products, articles, or other resources where selecting the card should take the user to another page or section.

To create an interactive card, apply the component selector to an `<a>` element. All card styles support interactive behavior.

<design-land-example-viewer-container example="linkable-card"></design-land-example-viewer-container>

## Elevation
Use the `elevated` property to add shadows to cards.

<design-land-example-viewer-container example="elevated-card"></design-land-example-viewer-container>

## Orientation
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