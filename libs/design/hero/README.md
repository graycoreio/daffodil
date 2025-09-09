# Hero
A hero is a top-level container designed to be large and captivating, typically used as the first component to introduce a page's main purpose or message.

## Overview
Heroes are the first visual element users see on a page and are intended to make a bold statement. They're flexible and extensible, including pre-styled content containers for common layouts such as titles, subtitles, taglines, and body content. Heroes should only be used once per page.

<design-land-example-viewer-container example="basic-hero"></design-land-example-viewer-container>

## Best practices

**When to use**
- Introducing the main purpose or message of a page
- Making a bold visual statement at the top of a page
- Highlighting promotional content or key features
- Creating an impactful landing page experience

## When not to use
Avoid heroes when:
- Trying to make a visual highlight that's not at the top of a page (use [callout](/libs/design/callout/README.md) instead)

## Usage

### Within a standalone component
To use the hero components, import `DAFF_HERO_COMPONENTS` directly into your custom component:

```ts
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_HERO_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use hero in a module, import `DaffHeroModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffHeroModule } from '@daffodil/design/hero';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffHeroModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A hero consists of the following components, displayed in the order listed:

### Container
**`<daff-hero>`**: The main wrapper that holds all hero content.

### Icon
**`[daffHeroIcon]`**: Displays visual or branding element. Avoid using for interactive icons.

### Tagline
**`[daffHeroTagline]`**: Short, memorable phrase that provides quick context.

### Title
**`[daffHeroTitle]`**: The primary heading text. Applied to heading elements (`<h1>`).

### Subtitle
**`[daffHeroSubtitle]`**: Secondary descriptive text displayed beneath the title.

### Body
**`[daffHeroBody]`**: Flexible container for additional content or actions. It's unstyled except for spacing and should only be used once per hero.

### Basic structure

```html
<daff-hero>
  <div daffHeroIcon>
    <img src="assets/summer-sale-icon.svg" alt="Summer sale icon" />
  </div>
  <div daffHeroTagline>Limited Time Offer</div>
  <h1 daffHeroTitle>Summer Collection Sale</h1>
  <p daffHeroSubtitle>Up to 50% off select items through July 31</p>
  <div daffHeroBody>
    <button daff-button color="secondary">Shop the sale</button>
    <button daff-button color="theme">Learn more</button>
  </div>
</daff-hero>
```

## Features

### Colors
Use the `color` property to change the background of a hero.

<design-land-example-viewer-container example="hero-theming"></design-land-example-viewer-container>

### Text alignment
Control hero-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect `[daffHeroBody]` content or nested elements.

<design-land-example-viewer-container example="hero-text-alignment"></design-land-example-viewer-container>

### Compact
Use the `compact` property on hero to reduce padding and suit UIs with tighter spacing requirements.

<design-land-example-viewer-container example="compact-hero"></design-land-example-viewer-container>

## Examples

### Hero with two columns
Heroes are flexible enough to support custom grid layouts for more complex arrangements:

<design-land-example-viewer-container example="hero-with-grid"></design-land-example-viewer-container>
