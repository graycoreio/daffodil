# Tabs
Tabs provide a way to navigate between panels that display related content.

## Overview
Tabs allow for users to navigate between related content without having to leave the page. They can be used within components like modals or cards.

### Examples

### Basic tabs
<design-land-example-viewer-container example="basic-tabs"></design-land-example-viewer-container>

### Tabs with a disabled tab
<design-land-example-viewer-container example="disabled-tabs"></design-land-example-viewer-container>

###
<design-land-example-viewer-container example="custom-select-tabs"></design-land-example-viewer-container>

###
<design-land-example-viewer-container example="initially-select-tab"></design-land-example-viewer-container>

## Accessbility
Tabs follow the [ARIA Tabs design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Tabs compose of `tablist`, `tab`, and `tabpanel` elements,  each with its appropriate role and integrated keyboard interactions.

### Label
A meaningful `aria-label` should be set on `<daff-tabs>` by using the `aria-label` property. This will set the `aria-label` on the `tablist` element.

### Keyboard Interactions
| Key | Action |
| --- | ------ |
| Left Arrow |  Moves focus and activates previous tab. If focus is on the first tab, moves focus to the last tab. |
| Right Arrow |  Moves focus and activates next tab. If focus is on the last tab, moves focus to the first tab. |
| Home |  Moves focus and activates first tab. |
| End |  Moves focus and activates last tab. |
