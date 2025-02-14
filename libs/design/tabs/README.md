# Tabs
Tabs provide a way to navigate between panels that display related content.

## Overview
Tabs allow for users to navigate between related content without having to leave the page. They can be used within components like modals or cards.

## Usage

### Within a standalone component
To use a tabs in a standalone component, import `DAFF_TABS_COMPONENTS` directly into your custom component:

```ts
import { DAFF_TABS_COMPONENTS } from '@daffodil/design/tabs';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_TABS_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Properties

### Link Mode
Tabs in link mode replaces the tab buttons with anchors. This allows the selected tab to be connected to a URL. By default, the current URL and `tab` query param will be used. These can be overriden with the `url` and `queryParam` inputs respectively.

```html
<daff-tabs [linkMode]="true">
</daff-tabs>
```

## Accessbility
Tabs follow the [ARIA Tabs design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Tabs compose of `tablist`, `tab`, and `tabpanel` elements,  each with its appropriate role and integrated keyboard interactions.

### Label
A meaningful `aria-label` should be set on `<daff-tabs>` by using the `aria-label` property. This will set the `aria-label` on the `tablist` element.

```html
<daff-tabs aria-label="Custom aria label">
</daff-tabs>
```

### Keyboard Interactions
| Key | Action |
| --- | ------ |
| Left Arrow |  Moves focus and activates previous tab. If focus is on the first tab, moves focus to the last tab. |
| Right Arrow |  Moves focus and activates next tab. If focus is on the last tab, moves focus to the first tab. |
| Home |  Moves focus and activates first tab. |
| End |  Moves focus and activates last tab. |
