# Tabs
Tabs provide a way to navigate between panels that display related content.

## Overview
Tabs allow for users to navigate between related content without having to leave the page. They can be used within components like modals or cards.

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

### Link Mode
Tabs can operate in "link mode" which replaces the tab buttons with anchors. This allows the selected tab to be connected to the URL. To use this mode, set `linkMode` to `true` on the tabs component. By default, the current URL and `tab` query param will be used. These can be overriden with the `url` and `queryParam` inputs respectively.
