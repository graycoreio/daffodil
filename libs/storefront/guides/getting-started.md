# Getting started
This guide is designed to touch upon the very basics of `@daffodil/storefront` to get you up and running quickly. It includes information on prerequisites, installation steps, and how to use a component.

## Before you begin
`@daffodil/storefront` is designed to be used with Angular. Make sure [Angular CLI](https://angular.io/cli) has been installed before you begin. You'll also need a package manager like [npm](https://www.npmjs.com/package/@daffodil/storefront) or [Yarn](https://yarnpkg.com/package?q=%40daffodil%storefront&name=%40daffodil%storefront).

`@daffodil/storefront` is built with [Sass](https://sass-lang.com/), so we recommend you learn it!

## Installation
To install `@daffodil/storefront`, use the following commands in your terminal:

Install with npm:
```bash
npm install @daffodil/storefront --save 
```

Install with Yarn:
```bash
yarn add @daffodil/storefront
```

## Set up your style environment
1. Create a `styles.scss` in the root of your Angular app.
2. Add the stylesheet to your `angular.json` file. This step can be skipped if SASS is already in use in the application and the stylesheet already exists.

```json
"projects": {
  "app-name": {
    "architect": {
      "build": {
        "options": {
          "styles": [
            "src/styles.scss"
          ],
        }
      }
    }
  }
}
```

## Add a theme
A theme must be configured in order for Storefront UI components to work properly.

The `daff-sf-component-themes` mixin includes styles for all components. The example below demonstrates how to use Storefront UI's default theme, where the `$theme` variable is the default configured theme. The mixin is included in the `html` selector to ensure that component styles are applied across the entire application.

```scss
@use '@daffodil/storefront/scss/theme' as daff-sf-theme;

html {
	@include daff-sf-theme.daff-sf-component-themes(daff-sf-theme.$theme);
}
```

The components in Storefront UI can be configured with custom colors in addition to a dark and light mode for those same colors. See the [design theming guide](/libs/design/guides/theming/customize-your-own-theme.md) for more information on how to customize your own theme.

## Use a component
Now you're ready to use Storefront UI components!

```ts
import { DAFF_SF_CAROUSEL_COMPONENTS } from '@daffodil/storefront/carousel';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SF_CAROUSEL_COMPONENTS,
		DAFF_CARD_COMPONENTS,
		DAFF_BASIC_BUTTON_COMPONENTS,
  ],
})
export class CustomComponent {}
```

With the component imported, you can add it to your `CustomComponent` template like so:

```html
<daff-sf-carousel>
	<ng-template daffSfCarouselItem *ngFor="let slide of [1,2,3,4,5,6]">
		<daff-card class="docs-card">
			<div daffCardHeader>Header {{slide}}</div>
			<div daffCardTitle>Title</div>
			<div daffCardContent>
				<p>Card content text that is relevant to the title and builds context about an image that may be added
					to the card.</p>
				<p>Card content with multiple paragraphs.</p>
			</div>
			<div daffCardActions>
				<button daff-button type="button" color="primary">Button Text {{slide}}</button>
			</div>
		</daff-card>
	</ng-template>
</daff-sf-carousel>
```