# Color
Color helps to distinguish and create consistent experiences across products. It highlights key areas, conveys status, urgency, and guides attention.

## Color palettes
The design system includes three core palettes that reflect Daffodil's brand identity, three palettes used to indicate status, and a neutral palette that is dominant throughout the design system. These palettes are built using [HSLuv](https://www.hsluv.org/), a color space designed as a human-friendly alternative to the standard HSL. It aims to address the limitations of traidtional color spaces like RGB and HSL.

For guidance on how to set up your theme with customized palettes, see theming's [getting started](/libs/design/guides/theming/getting-started.md) guide.

## Accessibility
We are committed to complying with the [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG/). The design system is built to meet these guidelines automatically. If you choose to identify your own color palettes outside of Daffodil's colors, please make sure to choose primary, secondary, tertiary, and extended colors that will pass the guidelines. Ensure there is sufficient color contrast between elements so that people who are visually impaired can see and use your products.

### Color Contrast
We have encoded many of the WCAG requirements into our SASS mixins and functions. This means that if you swap to a color palette that does not meet the requirements of WCAG compliance and try to use it within the components, our code will proactively complain and issue errors. This is entirely intentional and will not be changed. The current state of accessibility is lacking, and as a result, we are enforcing accessibility requirements at development time in order to make it easier for developers to accommodate these issues before they are in the hands of users.

To verify contrast ratios, we recommend using this [contrast ratio calculator](https://contrast-ratio.com/).

**Normal Text**

Normal text must have a contrast ratio of at least 4.5:1 to pass AA guidelines and 7:1 to pass AAA guidelines. This is accurate only if your font is **at least 16px with regular weight or heavier.**

**Large Text**

Large text must have a contrast ratio of at least 3:1 to pass AA guidelines and 4.5:1 to pass AAA guidelines. This is accurate only if your font is **at least 18.66px with bold weight or 24px.**

The `10-50` steps all meet a 4:5:1 contrast ratio or higher against `$daff-neutral, 110 (#070707)` or darker, while the `60-100` steps all meet a 4:5:1 contrast ratio against `$daff-neutral, 10 (#fafafa)`.

**As a result, we've ensured that in the palettes that we provide, the following are enforced:**

- "70" (e.g. 80 - 10) palette steps apart guarantees at least a 7:1 ratio
- "60" (e.g. 70 - 10) palette steps apart guarantees at least a 4.5:1 ratio

> There may be smaller increments that allow for the contrast ratios to be met (e.g. "20/70" passes a 4.5:1 ratio), but this is not consistently reliable across and within palettes, so please use this at your discretion.

## Tokens
Tokens replace static HEX values and are used to apply color consistently across products. See the tokens page for the full list of color tokens and their descriptions.