# Select

## Usage
The consuming component should pass a list of option values and a form control into `daff-select` as props. The consumer is fully in charge of rendering the options and selected option. This is accomplished by passing templates into two content projection slots.

## Slots
### `daffSelectOption`
`daffSelectOption` provides the template for the list of options inside the select dropdown. Two values are bound to this slot context: `option` and `isSelected`. See `DaffSelectOptionDirectiveContext` for more info.
