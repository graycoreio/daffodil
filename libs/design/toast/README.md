# Toast
Toasts are small messages designed to mimic push notifications. They are used to provide users with application level information.

## Overview
Toasts should be used to display temporary messages about actions or events that occured or in need of attention, with no relation to content on a page. For messaging that provide context in close promixity to a piece of content within a page, use the [Notification](/libs/design/notification/README.md) component.

## Basic toast
<design-land-example-viewer-container example="default-toast"></design-land-example-viewer-container>

## Setting up the component
`provideDaffToast()` must be added as a provider in your application's root component for global use or in a specific feature component for the toast functionality to work properly.

```ts
import { provideDaffToast } from '@daffodil/design/toast';

@NgModule({
  providers: [
    provideDaffToast(),
  ]
)}

export class AppModule {}
```

## Dismissal
A toast can be dismissed via a timed duration or a close button.

The `duration` and `dismissible` properties can be updated when you open it with the `DaffToastService`.

### Timed duration
A toast with actions will persist until one of the actions have been interacted with or dismissed by the close button. By default, a toast without actions will be dismissed after `5000ms`.

> Actionable toasts should be persistent, but a duration is allowed to be set. If duration must be set, make sure it's long enough for users to engage with the actions.

<design-land-example-viewer-container example="toast-with-custom-duration"></design-land-example-viewer-container>

### Close button
The close button is hidden by default, and dismissible is ignored when there are actions in a toast. You can change the visibility of the close button via the `dismissible` property.

<design-land-example-viewer-container example="dismissible-toast"></design-land-example-viewer-container>

## Stacking
A maximum of three toasts can be shown at a time. Toasts are stacked vertically, with the most recent toast displayed on top.

## Statuses
You can set the status of a toast when opening it with `DaffToastService`, using values defined by `DaffStatus`.

<design-land-example-viewer-container example="toast-status"></design-land-example-viewer-container>

## Accessibility
By default, toasts use a `role="status"` to announce messages. It's the equivalent of `aria-live="polite"`, which does not interrupt a user's current activity and waits until they are idle to make the announcement.

`role="alertdialog"` is used when a toast has action. The toast will be focus trapped and focus immediately moves to the actions.

Avoid setting a duration on toasts with actions because they will disappear automatically, making it difficult for users to interact with the actions.

### Keyboard Interactions
| Key   | Action |
| ----- | ------ |
| `ESC` |  Dismisses a toast if it has actions and is focus trapped. |