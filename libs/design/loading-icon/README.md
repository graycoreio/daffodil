# Loading Icon
Loading icons are used as an indicator of an event in progress.

## Overview
Loading icons are used to indicate to users that an event is ocurring and is still in progress. They should only be used for short loading processes. For events that can take a considerable amount of time, use the [Progress Bar](/libs/design/progress-bar/README.md) component instead.

## Diameter
The diameter of a loading icon can be defined by using the `diameter` property. By default, the diameter is set to `60`.

<design-land-example-viewer-container example="loading-icon-diameter"></design-land-example-viewer-container>

## Theming
The loading icon color is defined by using the `color` property. By default, the color is set to `primary`. This can be changed to one of the supported colors.

Supported colors: `primary | secondary | tertiary | black | white | theme | theme-contrast`

<design-land-example-viewer-container example="loading-icon-color"></design-land-example-viewer-container>

## Accessibility
Loading icons should be given meaningful labels by using `aria-label` or `aria-labelledby`. Additionally, if a loading icon is used to indicate a process in progress, using [aria-live](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-live) and [aria-busy](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy") should be strongly considered.