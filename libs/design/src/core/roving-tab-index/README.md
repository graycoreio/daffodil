# Roving Tab Index

Roving tab index (RTI) manages keyboard focus across groups of interactive elements.

## Overview

It automatically handles `<a>` and `<button>` elements, supports arbitrarily nested groups with boundary-based scoping, and provides full keyboard navigation support.

## Targets

All `<a>` and `<button>` elements are automatically treated as RTI targets. Other elements can become targets by using the `rti` directive.

## Groups

RTI has the concept of *groups* delineated by boundaries. There is a default "root" group under which all RTI targets and other groups reside. This group is automatically managed and does not require a declared boundary. Specific groups can be created using the `rtiBoundary`. These groups can be arbitrarily deeply nested. A group boundary is automatically treated as an RTI target.

Boundaries are given unique anonymous IDs unless a value is passed to `rtiBoundary`. Targets are considered in the group of the nearest ancestor that is an `rtiBoundary`. This can be overridden by passing a group ID to `rti` but this is only valid if the boundary has also been given a name.

<daffio-example-viewer example="rti-nested-groups"></daffio-example-viewer>

## Keyboard navigation

| Key | Action |
|---|---|
| <kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> | Moves focus between RTI targets |
| <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> | Moves focus between targets within a group |
| <kbd>Space</kbd> | Enters the focused group |
| <kbd>ESC</kbd> | Leaves the current group |

> Note: the parent group isn't necessarily the containing group in the DOM. Overriding boundary and target values can produce an RTI hierarchy that differs from the DOM tree.
