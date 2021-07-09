# Quantity Field
DaffQuantityFieldComponent is a form control element that switches between a native select and input element. It is intended for use with cart item and product quantities. The maximum number accepted in a quantity select is 10 by default. It will switch to a quantity input if 10+ is selected.

The select max number is configurable. See below usage.

## Range Limits
The default allowed range of numbers is 1 to 500. This can be changed by passing in the desired min and max values as inputs. Note that this does not validate the actual input, it merely informs the select which options it should generate and sets the input's min and max attributes. See [input#min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#min) and [input#max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#max) for more info.

## Usage

### With Form Control

```html
<daff-quantity-field [formControl]="control"></daff-quantity-field>
```

### Custom Max Select Value
```html
<daff-quantity-field [selectMax]="15"></daff-quantity-field>
```

### Custom Range Limits
```html
<daff-quantity-field [min]="5" [max]="50"></daff-quantity-field>
```
