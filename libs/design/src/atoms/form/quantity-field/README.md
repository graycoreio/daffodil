# Quantity Field
Quantity field is a form control element that switches between a native select and input element.

## Overview
Quantity field is intended for use with cart items and product quantities. The maximum number accepted in a quantity select is configurable and set to 10 by default. It will switch to a quantity input if 10+ is selected.

## Range Limits
The default allowed range of numbers is 1 to 500. This can be changed by passing in the desired min and max values as inputs. Note that this does not validate the actual input. It merely informs the select which options it should generate and sets the input's min and max attributes. See [input#min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#min) and [input#max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#max) for more information.

## Usage

### Basic
<daff-docs-example-viewer-container-ce example="basic-quantity-field"></daff-docs-example-viewer-container-ce>

### Disabled
<daff-docs-example-viewer-container-ce example="disabled-quantity-field"></daff-docs-example-viewer-container-ce>

### Custom Select Max Value (15)
The maximum value at which the field will switch to using an input is configurable.
<daff-docs-example-viewer-container-ce example="select-max-quantity-field"></daff-docs-example-viewer-container-ce>

### Custom Range Limits (5 - 50)
Custom range limits is the absolute minimum and maximum values can be specified.
<daff-docs-example-viewer-container-ce example="custom-range-quantity-field"></daff-docs-example-viewer-container-ce>
