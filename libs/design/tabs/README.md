# Tabs
Tabs provide a way to navigate between panels that display related content without leaving the page.

## Overview
Tabs help organize related content into manageable sections, making it easier for users to find and focus on specific information. They're particularly useful for displaying content in compact spaces, such as within [modals](/libs/design/modal/README.md) or [cards](/libs/design/card/README.md), allowing users to switch between sections without navigating away from the current view.

<design-land-example-viewer-container example="basic-tabs"></design-land-example-viewer-container>

## Best practices

**When to use**
- Organizing related content into logical sections
- Working within limited screen space
- Allowing users to switch between content views without page navigation

## When not to use
Avoid tabs when:
- Content needs to be compared or viewed simultaneously
- Users need to see all content in a sequential sequence

## Usage

### Within a standalone component
To use tabs in a standalone component, import `DAFF_TABS_COMPONENTS` directly into your custom component:

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
A tabs component consists of the following components:

### Container
**`<daff-tabs>`**: The wrapper component that contains all tabs.

### Tab
**`<daff-tab>`**: Represents a single tab that groups a label and its corresponding panel together.

### Tab Label
**`<daff-tab-label>`**: The clickable label that activates its corresponding tab panel. Labels can contain text, icons, or both.

### Icon
Use the `[daffPrefix]` or `[daffSuffix]` element to add a decorative icon before or after the label text. This provides quick visual cues about the tab's purpose.

### Tab Panel
**`<daff-tab-panel>`**: The content area displayed when a tab is active.

### Basic structure
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

## Features

### Link mode
Tabs in link mode replace the tab buttons with anchors, allowing the selected tab to be connected to a URL.

By default, the current URL and `tab` query param will be used. These can be overriden with the `url` and `queryParam` inputs, respectively.

```html
<daff-tabs [linkMode]="true">
</daff-tabs>
```

## Accessibility
Tabs follow the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

### Daffodil provides
- `role="tablist"`, `role="tab"`, and `role="tabpanel"` on appropriate elements
- Unique IDs automatically assigned to each tab (customizable via `id` attribute)
- `aria-labelledby` linking tab panels to their corresponding tab labels
- `aria-selected` indicating the active tab

#### Keyboard interactions
| Key | Action |
| --- | ------ |
| `Left Arrow` |  Moves focus and activates the previous tab. If focus is on the first tab, focus moves to the last tab. |
| `Right Arrow` |  Moves focus and activates the next tab. If focus is on the last tab, focus moves to the first tab. |
| `Home` |  Moves focus and activates the first tab. |
| `End` |  Moves focus and activates the last tab. |

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
