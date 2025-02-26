# Getting started
This guide is designed to touch upon the very basics of `@daffodil/design` to get you up and running quickly. It includes information on prerequisites, installation steps, and how to use a component.

## Before you begin
`@daffodil/design` is designed to be used with Angular. Make sure [Angular CLI](https://angular.io/cli) has been installed before you begin. You'll also need a pakcage manager like [npm](https://www.npmjs.com/package/@daffodil/design) or [Yarn](https://yarnpkg.com/package?q=%40daffodil%2Fdesign&name=%40daffodil%2Fdesign).

`@daffodil/design` is built with [Sass](https://sass-lang.com/), so we recommend you learn it!

## Installation
To install `@daffodil/design`, use the following commands in your terminal:

Install with npm:
```bash
npm install @daffodil/design --save 
```

Install with Yarn:
```bash
yarn add @daffodil/design
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

### Add global styles
There is a minimal required global style for the Daffodil Design System to operate effectively in all supported browsers. Update your `styles.scss` file to include the following:

```scss
@forward '@daffodil/design/scss/global';
```

> For more information on our approach to these kinds of styles, see the [Global Styles guide.](/libs/design/guides/foundations/global-styles.md)

## Add a theme
A theme must be configured in order for Daffodil Design components to work properly.

The `daff-theme` mixin includes styles for all components. The example below demonstrates how to use Daffodil Design's default theme, where the `$theme` variable is the default configured theme. The mixin is included in the `html` selector to ensure that component styles are applied across the entire application.

```scss
@use '@daffodil/design/scss/theme' as daff-theme;

html {
	@include daff-theme.daff-theme(daff-theme.$theme);
}
```

The components in Daffodil Design can be configured with custom colors in addition to a dark and light mode for those same colors. See the [theming guide](/libs/design/guides/theming/setting-up.md) for more information on how to customize your own theme.

## Use a component
Now you're ready to use Daffodil Design [components](/docs/design/components)! For example, here's how to use the [Hero](/libs/design/hero/README.md) component.

```ts
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  standalone: true,
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_HERO_COMPONENTS,
  ],
})
export class CustomComponent {}
```

With the component imported, you can add it to your `CustomComponent` template like so:

```html
<daff-hero>
  <div daffHeroTagline>Frontend framework for ecommerce PWAs</div>
  <h1 daffHeroTitle>Daffodil: The next great leap in ecommerce.</h1>
  <h2 daffHeroSubtitle>
    <p>Daffodil provides everything you need to create powerful and flexible ecommerce experiences.</p>
    <p>With Daffodil, ambitious businesses are able to achieve more while minimizing development and maintenance costs.</p>
  </h2>
</daff-hero>
```

## Next steps
We've just walked through the basics of setting up `@daffodil/design` and using the basic features of the Hero component. Now try to change the color of the [Hero](/libs/design/hero/README.md)!

Check out the [full list of components](/docs/design/components). Try and add them to your sample app and imagine all the wonderful things you can now build!