# Notification
Notifications provide a way to display and communicate information related to user actions within a page's content.

## Overview
Notifications are used to display short messages that provide context in close promixity to a piece of content. They're often used to provide feedback or to notify users about an action they performed within a page. Notifications should not be used to display app-level alerts. Instead, use the [Toast](/libs/design/toast/README.md) component.

### Default Notification
<design-land-example-viewer-container example="default-notification"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use notification in a standalone component, import `DAFF_NOTIFICATION_COMPONENTS` directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use notification in a module, import `DaffNotificationModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffNotificationModule } from '@daffodil/design/notification';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffNotificationModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Supported Content Types

### Icon
An icon can be used to give a user a brief overview of what the nofication is about. It can be added before the title and subtitle by using the <code>daffPrefix</code> selector.

### Title
Title gives a quick overview of what the notification is about. It can be added by using the `daffNotificationTitle` selector.

### Subtitle
Subtitle provides additional details about the notification that should be limited to one or two sentences. It can be added by using the `daffNotificationSubtitle` selector.

### Actions
Buttons can be included in notifications to resolve the notification or navigate them to a page with more information. It can be added by using the `daffNotificationActions` selector.

<design-land-example-viewer-container example="notification-with-actions"></design-land-example-viewer-container>

## Properties

### Statuses
The status color of a notification can be updated by using the `status` property.

Supported statuses: `warn | critical | success`

#### Notification with statuses
<design-land-example-viewer-container example="notification-status"></design-land-example-viewer-container>

### Orientation
Orientation dictates how a notification's content is stacked — `vertical` or `horizontal`. Notifications are oriented vertically by default. The orientation of a notification can be defined or updated by using the `orientation` property.

<design-land-example-viewer-container example="notification-orientations"></design-land-example-viewer-container>

### Dismissing a notification
Notifications are not dismissible by default. They typically persist on the page until a user takes action that resolves the notification.

The close button is hidden by default but can be visible by setting the `dismissible` property to `true`. It should remain hidden if a notification has critical information for a user to read or interact with.

<design-land-example-viewer-container example="dismissible-notification"></design-land-example-viewer-container>

## Accessibility
Notifications with a `critical` or `warn` status have a `role="alert"` so that it can be announced by assistive technologies. See [live region roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#4._live_region_roles) for more information. All other notifications have a `role="status"`. Notifications have a `tabindex="0"` so users can discover them while tabbing through a page.