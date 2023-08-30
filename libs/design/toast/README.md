# Toast
Toasts are small messages designed to mimic push notifications used to provide users with application level information.

## Overview
Toasts should be used to display temporary messages about actions or events that occured, with no relation to content on a page. For messaging that provide context in close promixity to a piece of content within a page, use the [Notification](../notification/README.md) component.

## Stacking
A maximum of three toasts can be shown at a time. Toasts are stacked vertically, with the most recent toast displayed on top.

## Statuses
Supported statuses: `warn | danger | success`

<design-land-example-viewer-container example="toast-status"></design-land-example-viewer-container>

## Positions

| Property     | Value                    |
| ------------ | ------------------------ |
| `vertical`   | `top | bottom`           |
| `horizontal` | `left | center | right ` |

Top right is the default position for toasts.

<design-land-example-viewer-container example="toast-positions"></design-land-example-viewer-container>