# Toast
Toasts are small messages designed to mimic push notifications. They are used to provide users with application level information.

## Overview
Toasts should be used to display temporary messages about actions or events that occured or in need of attention, with no relation to content on a page. For messaging that provide context in close promixity to a piece of content within a page, use the [Notification](/libs/design/notification/README.md) component.

## Basic Toast
<design-land-example-viewer-container example="default-toast"></design-land-example-viewer-container>

## Setting up the component
`provideDaffToast()` should be added as a provider either in your application's root component for global use or in a specific feature component.

```ts
import { provideDaffToast } from '@daffodil/design/toast';

@NgModule({
	providers: [
		provideDaffToast(),
	]
)}

export class AppModule {}
```

### Configurations
Toast can be configured by using the `DaffToastService`.

The following is an example of a toast with a duration:

```ts
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
	DaffToast
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  selector: 'custom-toast',
  templateUrl: './custom-toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CustomToastComponent {
	private toast: DaffToast;

	constructor(private toastService: DaffToastService) {}

	open() {
		this.toast = this.toastService.open({
			title: 'Update Complete',
			message: 'This page has been updated to the newest version.',
		},
		{
			duration: 5000,
		});
	}
}
```

The following is an example of a toast with actions:

```ts
import {
  ChangeDetectionStrategy,
  Component,
	EventEmitter,
	OnInit,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import {
  DaffToast,
  DaffToastAction,
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  selector: 'action-toast',
  templateUrl: './action-toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
	imports: [
		DAFF_BUTTON_COMPONENTS,
	],
})
export class ActionToastComponent implements OnInit {
	private toast: DaffToast;

	constructor(private toastService: DaffToastService) {}

	update = new EventEmitter<DaffToastAction>();

  closeToast = new EventEmitter<DaffToastAction>();

	open() {
		this.toast = this.toastService.open({
			title: 'Update Available',
			message: 'A new version of this page is available.',
			actions: [
				{ content: 'Update', color: 'theme-contrast', size: 'sm', eventEmitter: this.update },
				{ content: 'Remind me later', type: 'flat', size: 'sm', eventEmitter: this.closeToast },
			]
		});
	}

	ngOnInit() {
    this.update.subscribe(() => {
    });

    this.closeToast.subscribe(() => {
      this.toastService.close(this.toast);
    });
  }
}
```

The following configurations are available in the `DaffToastService`:

| Property | Type   | Description                     | Default |
| -------- | ------ | ------------------------------- | ------- |
| title    | string | A quick overview of the toast   | --      |
| message  | string | Additional details about the message that should be limited to one or two sentences | --      |
| actions  | `DaffToastAction` | Adds a `daff-button` that allow users to perform an action related to the message. Actions should be limited to two buttons. | --      |
| dismissible  | boolean | Allows a toast to be dismissible via a close button | true |
| duration  | number | The duration in milliseconds that a toast is visible before it's dismissed | 5000 |

The `actions` configurations are based on the properties of the `DaffButtonComponent` (view [Button Documentation](/libs/design/button/README.md)) with the addition of `data` and `eventEmitter`.

## Dismissal
A toast can be dismissed via a timed duration, a close button, or the `ESC` key.

### Timed duration
A toast with actions will persist until one of the actions have been interacted with, or is dismissed by the close button or the `ESC` key. Actionable toasts should be persistent, but a duration is allowed to be set. If duration must be set, make sure it's long enough for users to engage with the actions.

By default, a toast without actions will be dismissed after `5000ms`. This can be updated by setting `duration` through the `DaffToastService`.

#### Toast with custom duration
<design-land-example-viewer-container example="toast-with-custom-duration"></design-land-example-viewer-container>

### Close button
The close button is shown by default but can be hidden by setting `dismissible: false` through the `DaffToastService`.

### Escape Key
A toast can be dismissed by using the `ESC` key if it has actions and is focus trapped.

## Stacking
A maximum of three toasts can be shown at a time. Toasts are stacked vertically, with the most recent toast displayed on top.

## Statuses
The status color of a toast can be updated by using the `status` property.

Supported statuses: `warn | danger | success`

### Toast with statuses
<design-land-example-viewer-container example="toast-status"></design-land-example-viewer-container>

## Positions

| Property     | Value                    | Default |
| ------------ | ------------------------ | ------- |
| `vertical`   | `top | bottom`           | top     |
| `horizontal` | `left | center | right ` | right   |

To change the horizontal and vertical position of a toast, add the `provideDaffToastOptions` dependency key to the `providers` key in the module as shown below:

```ts
providers: [
	provideDaffToastOptions({
		position: {
			vertical: 'bottom',
			horizontal: 'center',
		}
		useParent: false,
	})
]
```

The position of a toast on a mobile device will always be on the bottom center.

### Toast with configurable positions
<design-land-example-viewer-container example="toast-positions"></design-land-example-viewer-container>

## Accessibility
By default, toasts use a `role="status"` to announce messages. It's the equivalent of `aria-live="polite"`, which does not interrupt a user's current activity and waits until they are idle to make the announcement. When a toast has actions, a `role="alertdialog"` is used. The toast will be focus trapped and focus immediately moves to the actions.

Avoid setting a duration on toasts with actions because they will disappear automatically, making it difficult for users to interact with the actions.