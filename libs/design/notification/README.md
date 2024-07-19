# Notification
Notifications provide a way to display and communicate information related to user actions within a page's content.

## Overview
Notifications are used to display short messages that provide context in close promixity to a piece of content. They're often used to provide feedback or to notify users about an action they performed within a page. Notifications should not be used to display app-level alerts. Instead, use the [Toast](/libs/design/toast/README.md) component.

### Default Notification
<daff-docs-example-viewer-container-ce example="default-notification"></daff-docs-example-viewer-container-ce>

## Usage

### Within a standalone component
To use notification in a standalone component, import `DAFF_NOTIFICATION_COMPONENTS` directly into your custom component:

```ts
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
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
import { CustomComponent } from './custom.component';

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
An icon can be used to provide users with a quick visual cue about the purpose of a notification. Place the icon before the title and subtitle using the `[daffPrefix]` selector.

### Title
The title provides a quick overview of what the notification's content. Add it using the `[daffNotificationTitle]` selector.

### Subtitle
The subtitle provides additional details about the notification. It should be limited to one or two sentences. Add it using the `[daffNotificationSubtitle]` selector.

### Actions
Buttons can be included in notifications to dismiss them or navigate them to a page with more information. Use the `[daffNotificationActions]` selector to include these actions.

<daff-docs-example-viewer-container-ce example="notification-with-actions"></daff-docs-example-viewer-container-ce>

## Properties

### Status
The status property is used to visually distinguish between different notification types. Use the `status` property to set the status.

<daff-docs-example-viewer-container-ce example="notification-status"></daff-docs-example-viewer-container-ce>

### Orientation
Orientation dictates how a notification's content is stacked — `vertical` or `horizontal`. Notifications are oriented vertically by default. The orientation of a notification can be defined or updated by using the `orientation` property.

<daff-docs-example-viewer-container-ce example="notification-orientations"></daff-docs-example-viewer-container-ce>

### Dismissing a notification
By default, notifications are not dismissible and remain visible until the user takes an action to resolve them.

To show a close button, set the `dismissible` property to `true`. Avoid making critical notifications dismissible to ensure users can read or interact with the necessary information.

<daff-docs-example-viewer-container-ce example="dismissible-notification"></daff-docs-example-viewer-container-ce>

## Accessibility
Notifications with a `critical` or `warn` status have a `role="alert"` so that it can be announced by assistive technologies. See [live region roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#4._live_region_roles) for more information. All other notifications have a `role="status"`.

Notifications have a `tabindex="0"` so users can discover them while tabbing through a page.