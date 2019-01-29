# Button
The button is used for making actions apparent to the end-user. It can be used to navigate users to a different page or to perform an action.

## General

* `<a>` is used when the users will navigate to a different page.
* `<button>` is used when an action is performed within the same page.

## Selectors

* `daff-button` — Rectangular contained button with background color
* `daff-stroked-button` — Rectangular outlined button with no background color
* `daff-icon-button` — Icon button used with icon fonts

## Colors

To define a button color, add `color="[value]"` to the button tag.

* Color values: `primary`, `accent`, `black`, and `white`

## Accessbility

Icon buttons need to be given labels using `aria-label`.

## Usage
```
<button daff-button color="primary">
  button text
</button>
```

```
<a daff-button type="button">
  button text
</a>
```