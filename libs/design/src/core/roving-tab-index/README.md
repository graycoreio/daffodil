# Roving Tab Index

Roving tab index (RTI) manages keyboard focus across groups of interactive elements.

## Targets

All `<a>` and `<button>` elements are automatically treated as RTI targets. Other elements can become targets by using the `rti` directive.

## Groups

RTI has the concept of *groups* delineated by boundaries. There is a default "root" group under which all RTI targets and other groups reside. This group is automatically managed and does not require a declared boundary. Specific groups can be created using the `rtiBoundary`. These groups can be arbitrarily deeply nested. A group boundary is automatically treated as an RTI target.

Boundaries are given unique anonymous IDs unless a value is passed to `rtiBoundary`. Targets are considered in the group of the nearest ancestor that is an `rtiBoundary`. This can be overridden by passing a group ID to `rti` but this is only valid if the boundary has also been given a name.

## Behavior

Tab and shift+tab moves focus around between RTI targets in the current group. While having focus on a group, space enters that group. While inside a group, arrow down and up navigate the same as tab and shift+tab, respectively. Escape leaves the current group and enters the previous group. Note that the previous group isn't necessarily the same as the containing group in the DOM as overriding boundary and target values can generate an RTI group hierarchy that is different from the DOM.

<daffio-example-viewer example="rti-nested-groups"></daffio-example-viewer>