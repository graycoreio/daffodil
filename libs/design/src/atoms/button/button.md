# Button
The button is used for making actions apparent to the end-user. It can be used to navigate users to a different page or to perform an action. Buttons can contain text, icons, or both.

Native `<button>` or `<a>` elements are always used in order to provide an easy, accessible experience for users.
- `<a>` should be used for interactions that will navigate users to a new page or to a different target on the same page.
- `<button>` should be used when a clickable action is performed within the same page.

## Types
- `daff-button` -- Rectangular contained button with background color
- `daff-icon-button` -- Icon button used with icon fonts
- `daff-raised-button` - Rectangular contained button with background color and elevation
- `daff-stroked-button` -- Rectangular outlined button with no background color

## Theming
The color of a button can be changed by using the `color` property. By default, the button uses the base-contrast color of the theme. This can be changed to one of the supported colors.
- Supported colors: `primary | secondary | tertiary | black | white`

## Accessbility
Daffodil uses native `<a>` and `<button>` HTML elements to ensure an accessible experience by default. The `<button>` element should be used when a clickable action is performed within the same page. The `<a>` element should be used to navigate users to a new page or to a different target on the same page.

Buttons and links containing only icons (`<daff-icon-button>`) need to be given meaningful labels using `aria-label` or `aria-labelledby`.

## Usage Example
``` html
<h4>Basic Button</h4>
<daff-button-set>
  <button type="button" daff-button color="primary">Primary</button>
  <button type="button" daff-button color="secondary">Secondary</button>
  <button type="button" daff-button color="black">Black</button>
  <button type="button" daff-button color="white">White</button>
  <button type="button" daff-button color="caution">Caution</button>
  <a href="#" href="#" daff-button>Link</a>
  <button type="button" daff-button disabled>Disabled</button>
</daff-button-set>

<h4>Icon Button</h4>
<daff-button-set>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button color="primary"><fa-icon [icon]="faHeart"></fa-icon></button>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button color="secondary"><fa-icon [icon]="faHeart"></fa-icon></button>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button color="black"><fa-icon [icon]="faHeart"></fa-icon></button>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button color="white"><fa-icon [icon]="faHeart"></fa-icon></button>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button color="caution"><fa-icon [icon]="faHeart"></fa-icon></button>
  <button type="button" aria-label="Icon button with a heart icon" daff-icon-button disabled><fa-icon [icon]="faHeart"></fa-icon></button>
</daff-button-set>

<h4>Raised Button</h4>
<daff-button-set>
  <button type="button" daff-raised-button color="primary">Primary</button>
  <button type="button" daff-raised-button color="secondary">Secondary</button>
  <button type="button" daff-raised-button color="black">Black</button>
  <button type="button" daff-raised-button color="white">White</button>
  <button type="button" daff-raised-button color="caution">Caution</button>
  <a href="#" daff-raised-button>Link</a>
  <button type="button" daff-raised-button disabled>Disabled</button>
</daff-button-set>

<h4>Stroked Button</h4>
<daff-button-set>
  <button type="button" daff-stroked-button color="primary">Primary</button>
  <button type="button" daff-stroked-button color="secondary">Secondary</button>
  <button type="button" daff-stroked-button color="black">Black</button>
  <button type="button" daff-stroked-button color="white">White</button>
  <button type="button" daff-stroked-button color="caution">Caution</button>
  <a href="#" daff-stroked-button>Link</a>
  <button type="button" daff-stroked-button disabled>Disabled</button>
</daff-button-set>

<h4>Underline Button</h4>
<daff-button-set>
  <button type="button" daff-underline-button color="primary">Primary</button>
  <button type="button" daff-underline-button color="secondary">Secondary</button>
  <button type="button" daff-underline-button color="black">Black</button>
  <button type="button" daff-underline-button color="white">White</button>
  <button type="button" daff-underline-button color="caution">Caution</button>
  <a href="#" daff-underline-button>Link</a>
  <button type="button" daff-underline-button disabled>Disabled</button>
</daff-button-set>
```
