# Introduction
Get started with `@daffodil/design`, an Angular component library built for ecommerce with accessibility in-mind. With these first-steps, we warmly welcome you to a library that will help you build elegant and accessible user interfaces without having to do everything by hand. 

## First Steps
This tutorial is designed to touch upon the very basics of the `@daffodil/design` library. First things first, you will need to [create a new Angular project](`@daffodil/design`) and [install the library](./#installation). By the end of this tutorial, you will have created a basic Angular app that renders a simple `DaffHeroComponent` with a title and subtitle.

## Installation
`@daffodil/design` is designed to be used with Angular: [if you have not already done so, create a new Angular project](https://angular.io/cli). Afterwards, `@daffodil/design` can be installed using a [package manager](https://www.npmjs.com/package/@daffodil/design).

### npm
```bash
npm install @daffodil/design --save
```

### Yarn
```bash
yarn install @daffodil/design --save
```

### Modify Angular.json
Next, create a `styles.scss` in the root of the Angular app and modify the `angular.json`'s `projects.[my-app].architect.build.options.styles` to look as below. If SASS is already in use in the application and the stylesheet already exists, this step can be skipped.

```json
"styles": [
  "src/styles.scss"
],
```

> Note that `@daffodil/design` uses SASS, [so we recommend you learn it!](https://sass-lang.com/)

### Add the Global Styles
There is a minimal required global style for `@daffodil/design` to operate effectively in all browsers. Update the `styles.scss` to include the following:

```scss
@import '@daffodil/design/daff-global';
```

> Note that this import changes the output CSS and should only ever be imported once!

> For more information on our approach to these kinds of styles, [see the "Global Style" guide.](./global-styles.md)

### Add a Theme
`@daffodil/design` is a themable component library. The components in the design library can be configured with customized colors in addition to a dark AND light mode for those same colors.

> Are you excited by themes? So are we.

Next, create a file called `theme.scss` that is sibling to `styles.scss` and put the following content in it.

```scss
@import '@daffodil/design/daff-theme';

// These palettes describe the colors that make up the "theme" of the components.

$primary: daff-configure-palette($daff-yellow, 60);
$secondary: daff-configure-palette($daff-purple, 60);
$tertiary: daff-configure-palette($daff-blue, 60);
$theme: daff-configure-theme($primary, $secondary, $tertiary, 'light');
```

Then, import the new `theme.scss` into the `styles.scss` file.

```scss
@import '@daffodil/design/daff-global';
@import 'theme';

@include daff-theme($theme);
```

> These lines include theme variables and functions and then generate the theme CSS that will style the components.
> Note that this import changes the output CSS and should only ever be imported once!

### Use a Component
In the `AppModule` of your Angular app, import the `DaffHeroModule` into the `NgModule`'s `imports` array.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DaffHeroModule } from '@daffodil/design';

@NgModule({
  imports: [
    BrowserModule,
    DaffHeroModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Update the Template
With the module imported, the `AppComponent` template can be updated to render the component.

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

### Add Typographic Styles
At this point, there is some extra padding around the body of the `DaffHeroComponent`. This is intentional, and is driven by our "minimal modification" principle as described in the ["Global Styles" guide](./global-styles.md).

To give the final result that extra "pizzaz", simply add the following to the imports of `styles.scss`.

```scss
@import '@daffodil/design/daff-typography';
```

[View this example in Stackblitz](https://stackblitz.com/edit/daffodil-design-angular-10).

## Next Steps
We've just walked through the basics of setting up the `@daffodil/design` library. There is much more to it than just the `DaffHeroComponent`. Check out the full list of available components, try and add them to your sample app, and imagine all the wonderful things you can now build!