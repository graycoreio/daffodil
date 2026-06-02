# Tabs
Tabs provide a way to navigate between panels that display related content without leaving the page.

## Overview
Tabs help organize related content into manageable sections, making it easier for users to find and focus on specific information. They're particularly useful for displaying content in compact spaces, such as within [modals](/libs/design/modal/README.md) or [cards](/libs/design/card/README.md), allowing users to switch between sections without navigating away from the current view.

<daff-docs-example-viewer example="basic-tabs"></daff-docs-example-viewer>

## Best practices

**When to use**
- Organizing related content into logical sections
- Working within limited screen space
- Allowing users to switch between content views without page navigation

**When not to use**
- Content needs to be compared or viewed simultaneously
- Users need to see all content in a sequential order

## Usage

Import `DAFF_TABS_COMPONENTS` into your component:

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

## Anatomy
A tabs component is composed of a container, tabs, labels, and panels:

```html
<daff-tabs>
  <daff-tab>
    <daff-tab-label>
      <fa-icon daffPrefix></fa-icon>
      Tab Label
      <fa-icon daffSuffix></fa-icon>
    </daff-tab-label>
    <daff-tab-panel>
      Tab content goes here
    </daff-tab-panel>
  </daff-tab>
</daff-tabs>
```

- **`<daff-tabs>`**: The wrapper component that contains all tabs.
- **`<daff-tab>`**: A single tab that groups a label and its corresponding panel together.
- **`<daff-tab-label>`**: The clickable label that activates its corresponding tab panel. Labels can contain text, icons, or both.
- **`<daff-tab-panel>`**: The content area displayed when a tab is active.
- Add the `[daffPrefix]` or `[daffSuffix]` directive to an icon to place it before or after the label text. This provides a quick visual cue about the tab's purpose.

## Features

### Link mode
Set `linkMode` to `true` to replace the tab buttons with anchors, connecting the selected tab to a URL.

By default, the current URL and `tab` query param are used. Override these with the `url` and `queryParam` inputs, respectively.

<daff-docs-example-viewer example="link-tabs"></daff-docs-example-viewer>

### Initially selected tab
Set the `initiallySelected` input to a tab's `id` to select that tab on load. Without it, the first tab is selected by default.

<daff-docs-example-viewer example="initially-select-tab"></daff-docs-example-viewer>

### Disabled tab
Set the `disabled` property on a `<daff-tab>` to make it non-interactive.

<daff-docs-example-viewer example="disabled-tabs"></daff-docs-example-viewer>

### Programmatic selection
Call the `select` method with a tab's `id` to change the active tab from your own code.

<daff-docs-example-viewer example="custom-select-tabs"></daff-docs-example-viewer>

## Accessibility
Tabs follow the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

### Built-in behavior
- `role="tablist"`, `role="tab"`, and `role="tabpanel"` on the appropriate elements
- Unique IDs automatically assigned to each tab (customizable via the `id` attribute)
- `aria-labelledby` linking tab panels to their corresponding tab labels
- `aria-selected` indicating the active tab

### Developer responsibilities
- Provide a meaningful `aria-label` on `<daff-tabs>` to describe the tab group
- Keep tab labels concise and descriptive

```html
<daff-tabs aria-label="Product information">
  <daff-tab>
    <daff-tab-label>Description</daff-tab-label>
    <daff-tab-panel>Product description content</daff-tab-panel>
  </daff-tab>
</daff-tabs>
```

### Keyboard interactions
| Key | Action |
| --- | ------ |
| `Left Arrow` |  Moves focus and activates the previous tab. If focus is on the first tab, focus moves to the last tab. |
| `Right Arrow` |  Moves focus and activates the next tab. If focus is on the last tab, focus moves to the first tab. |
| `Home` |  Moves focus and activates the first tab. |
| `End` |  Moves focus and activates the last tab. |