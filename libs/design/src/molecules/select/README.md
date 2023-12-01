# Select

## Goals
1. The select should close if it's currently open and a user clicks somewhere outside of it.
2. By default, a select should either render a label text of what the select is or one of the options as the selected value (i.e. shipping addresses, render the first available address as the selected option or the "default" address a user has set in their account)
3.

## Usage

The consuming component should pass a list of option values and a form control into `daff-select` as props. The consumer is fully in charge of rendering the options and selected option. This is accomplished by passing templates into two content projection slots.

## Slots
### `daffSelectSelectedOption`
`daffSelectSelectedOption` is the content that gets shown inside the select. The currently selected value, if there is one, is bound to `selected` in the slot context. See `DaffSelectSelectedOptionDirectiveContext`.

It is recommended to provide a default label inside this slot when there is not a selected value as a hint to the user.

### `daffSelectOption`
`daffSelectOption` provides the template for the list of options inside the select dropdown. Two values are bound to this slot context: `option` and `isSelected`. See `DaffSelectOptionDirectiveContext` for more info.
