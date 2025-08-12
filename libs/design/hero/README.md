# Hero
Hero is a top level container designed to be large and captivating. It should be used only once per page, typically as the first component to introduce the page’s main purpose or message.

## Overview
Heroes are the first visual element users see on a page and are intended to make a bold statement. They are flexible and extensible, and include pre-styled content containers for common layouts such as titles, subtitles, taglines, and body content.

<design-land-example-viewer-container example="basic-hero"></design-land-example-viewer-container>

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
A `<daff-hero>` is composed of the following containers, rendered in the order listed:

**Icon**\
Used to display a visual or branding element. Use the `[daffHeroIcon]` selector. Avoid using this for interactive or actionable icons.

**Tagline**\
A short, memorable phrase that complements the title and provides quick context. Use the `[daffHeroTagline]` selector.

### Title
The primary heading for the hero. Use the `[daffHeroTitle]` selector along with an `<h1>`.

### Subtitle
A secondary descriptive text displayed beneath the title. Use the `[daffHeroSubtitle]` selector.

### Body
A flexible wrapper for additional components or custom layouts. Use the `[daffHeroBody]` selector. It's unstyled except for spacing, allowing for a ton of control and customization. It should only be used once per hero.

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

## Colors
Use the `color` property to change the background of a hero.

<design-land-example-viewer-container example="hero-theming"></design-land-example-viewer-container>

## Text alignment
Control hero-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect `[daffHeroBody]` content or nested elements.

<design-land-example-viewer-container example="hero-text-alignment"></design-land-example-viewer-container>

## Compact
Use the `compact` property on hero to reduce padding and suit UIs with tighter spacing requirements.

<design-land-example-viewer-container example="compact-hero"></design-land-example-viewer-container>

## Examples

### Hero with two columns
Heroes are flexible enough to support custom grid layouts for more complex arrangements:

<design-land-example-viewer-container example="hero-with-grid"></design-land-example-viewer-container>
