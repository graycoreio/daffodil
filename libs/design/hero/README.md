# Hero
A hero is a top-level container designed to be large and captivating, typically used as the first component to introduce a page's main purpose or message.

## Overview
Heroes are the first visual element users see on a page and are intended to make a bold statement. They're flexible and extensible, including pre-styled content containers for common layouts such as titles, subtitles, taglines, and body content. Heroes should only be used once per page.

<daff-docs-example-viewer example="basic-hero"></daff-docs-example-viewer>

## Best practices

**When to use**
- Introducing the main purpose or message of a page
- Making a bold visual statement at the top of a page
- Highlighting promotional content or key features
- Creating an impactful landing page experience

**When not to use**
- Making a visual highlight that's not at the top of a page (use [callout](/libs/design/callout/README.md) instead)

## Usage

Import `DAFF_HERO_COMPONENTS` into your component:

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

> **Deprecation notice:**
> 
> `DaffHeroModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A hero is composed of a wrapper, icon, tagline, title, subtitle, and body, displayed in the order listed:

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

- **`<daff-hero>`**: The wrapper component that holds all hero content.
- **`[daffHeroIcon]`**: Displays a visual or branding element. Avoid using for interactive or actionable icons.
- **`[daffHeroTagline]`**: Short, memorable phrase that provides quick context.
- **`[daffHeroTitle]`**: The primary heading text. Applied to heading elements (`<h1>`).
- **`[daffHeroSubtitle]`**: Secondary descriptive text displayed beneath the title.
- **`[daffHeroBody]`**: Flexible container for additional content or actions. It's unstyled except for spacing and **should only be used once per hero**.

## Features

### Colors
Use the `color` property to change the background of a hero.

<daff-docs-example-viewer example="hero-theming"></daff-docs-example-viewer>

### Text alignment
Control hero-specific text alignment with the `textAlignment` property. It defaults to `left` and **does not** affect `[daffHeroBody]` content or nested elements.

<daff-docs-example-viewer example="hero-text-alignment"></daff-docs-example-viewer>

### Compact
Use the `compact` property on hero to reduce padding and suit UIs with tighter spacing requirements.

<daff-docs-example-viewer example="compact-hero"></daff-docs-example-viewer>

## Examples

### Hero with two columns
Heroes are flexible enough to support custom grid layouts for more complex arrangements:

<daff-docs-example-viewer example="hero-with-grid"></daff-docs-example-viewer>
