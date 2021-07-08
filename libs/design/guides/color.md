# Color
Color is used to help us distinguish and create consistent experiences across products.

## Palettes
[DYNAMIC]

## Accessibility
At Daffodil, we are dedicated to continually improving the accessibility of our application. When considering updating the color palettes, there are some extremely important considerations that are imperative for developers to understand. `@daffodil/design` components has been intentionally designed to meet [Web Content Accessibility Guidelines (WCAG) 2.1 AA compliance](https://www.w3.org/TR/WCAG21) (e.g. ["Distinguishable" contrast](https://www.w3.org/TR/WCAG21/#distinguishable)).

### Color and Contrast
We have encoded many of the WCAG requirements into our SASS mixins and functions. This means that if you swap to a color palette that does not meet the requirements of WCAG compliance and try to use it within the components, our code will proactively complain and issue errors. This is entirely intentional and will not be changed. The current state of accessibility is lacking, and as a result, we are enforcing accessibility requirements at development time in order to make it easier for developers to accommodate these issues before they are in the hands of users.

To verify contrast ratios, we recommend using this [contrast ratio calculator](https://contrast-ratio.com/).

#### Daffodil Guarantees
As a result of our [accessibility considerations](./accessibility#color-and-contrast), we've ensured that the following are **guaranteed** and **strictly enforced (via development time errors)** in the `@daffodil/design` codebase:

* Palette steps "70" (e.g. 80 - 10) apart guarantee at least a 7:1 ratio.
* Palette steps "60" (e.g. 70 - 10) apart guarantee at least a 4.5:1 ratio.

> Note, there may be smaller palette increments that allow for the contrast ratios to be met (e.g. "20/70" passes a 4.5:1 ratio), but this is not consistently reliable across and within palettes, so please use this at your discretion.

#### Contrast Ratio

##### Normal Text
Normal text must have a contrast ratio of at least 4.5:1 to pass AA guidelines and 7:1 to pass AAA guidelines. This is accurate only if your font is **at least 16px with regular weight or heavier.**

##### Large Text
Large text must have a contrast ratio of at least 3:1 to pass AA guidelines and 4.5:1 to pass AAA guidelines. This is accurate only if your font is **at least 18.66px with bold weight or 24px.**

The `10-50` steps all meet a 4:5:1 contrast ratio or higher against `$daff-gray, 110 (#070707)` or darker, while the `60-100` steps all meet a 4:5:1 contrast ratio against `$daff-gray, 10 (#fafafa)`.

