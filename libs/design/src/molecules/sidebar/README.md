# Sidebar Component

## Usage

```
<daff-sidebar-viewport>
    <daff-sidebar></daff-sidebar>
    <p>Some Content</p>
</daff-sidebar-viewport>
```


### Goals

1. Support position sticky inside sidebar content
2. Support 1 sidebar at a time on each side
3. Support viewports inside of other viewports.
4. A `global` flag that can be set to use `dvh`
5. Sidebars as the window size changes from `side` to `over` and vice-versa by default.
6. Where does the body scrollbar start and end? Does it hit the header of go to the top of the document.