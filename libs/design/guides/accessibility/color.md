---
group: features
---

# Accessible Colors

When considering re-coloring the components, there are some extremely important considerations that are imperative for developers to understand. The components have intentionally been designed to meet [WCAG AA compliance](https://www.w3.org/TR/WCAG21). This means that we have designed the component kit to meet certain criteria, e.g. ["Distinguishable" contrast](https://www.w3.org/TR/WCAG21/#distinguishable).

## Color and Contrast

We have encoded many of the WCAG requirements into our SASS mixins and functions. This means that if you try to swap to a color palette that does not meet the requirements of WCAG compliance and then try to use it within the components, our code will proactively complain and issue errors. This is entirely intentional and will not be changed. The current state of accessibility is lacking, and as a result, we are forced to encode this at development time in order to make it easier for developers to accommodate these issues before they are in the hands of users.

To verify contrast ratios, we recommend using this [contrast ratio calculator](https://contrast-ratio.com/).

### Daffodil Guarantees
As a result of our [accessibility considerations](./accessibility#color-and-contrast), we've ensured that in the components that we provide, the following are **guaranteed** and **strictly enforced (via development time errors)** in the codebase:

* Palette steps "70" (e.g. 80 - 10) apart guarantee at least a 7:1 contrast ratio.
* Palette steps "60" (e.g. 70 - 10) apart guarantee at least a 4.5:1 ratio.

> Note, there may be smaller palette increments that allow for the contrast ratios to be met (e.g. "20/70" passes a 4.5:1 ratio), but this is not consistently reliable across and within palettes, so please use this at your discretion.

### Text Contrast

#### Normal Text

Normal text must have a contrast ratio of at least 4.5:1 to pass AA guidelines and 7:1 to pass AAA guidelines. This is accurate only if your font is **at least 16px with Regular weight or heavier.**

#### Large Text

Large text must have a contrast ratio of at least 3:1 to pass AA guidelines and 4.5:1 to pass AAA guidelines. This is accurate only if your font is **at least 18.66px with Bold weight or 24px.**