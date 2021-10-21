# Typography
Daffodil uses typography to establish hierarchy and create clear visual patterns to guide our users through a product or experience.

## Type Scale
`@daffodil/design`'s typographic scale is designed with visual distinctions to help our users better understand content and UI. Text sizes, styles, and layouts have been chosen to maintain logical hierarchies and drive consistency throughout an application.

### 8px System
Our type scale is based on an 8px system, where the type is largely divisible by 8. For smaller sizes, the system allows for the scale to be divisible by 4. Font sizes are typically smaller on mobile and scaled up at the `tablet` breakpoint to be larger on desktop.

## Font Stack
Daffodil uses a system font stack to maximize on performance, legibility, and accessibility. System fonts play into the improvement of today's rich displays Additionally, system fonts provides a seamless experience for our users because the application feel more like it blends in with a user's device OS.

```scss
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
```

* `-apple-system` and `BlinkMacSystemFont` targets default fonts in Safari, Firefox, and Chrome on macOS and iOS.
* `Segoe UI` is the system font for Windows.
* `Helvetica` and `Arial` are added as fallbacks.
* `Apple Color Emoji`, `Segoe UI Emoji`, and `Segoe UI Symbol` are included so that emojis are rendered correctly in macOS and Windows.

## Typography Mixins
Typography mixins are used to keep typography consistent with logical hierarchies. Utilizing the mixin ensures that content within the UI are clear and easily recognizable. Mixins are available for headlines, body, subheading, and caption. They are used within the `@daffodil/design` components and can also be used within custom CSS.

The headline mixins are responsive and will adjust at the `tablet` breakpoint.

| Mixin       | Font size: mobile | Line height: mobile | Font size: desktop | Line height: desktop | Font weight | Letter spacing |
| ----------- | ----------------- | ------------------- | ------------------ | -------------------- | ----------- | -------------- |
| headline-xl | 40px              | 48px                | 56px               | 64px                 | 700         | 0px            |
| headline-lg | 32px              | 36px                | 48px               | 56px                 | 700         | 0px            |
| headline-md | 24px              | 28px                | 32px               | 40px                 | 700         | 0px            |
| headline-sm | 20px              | 24px                | 24px               | 32px                 | 700         | 0px            |
| body-lg     | 24px              | 32px                | 24px               | 32px                 | 400         | 0px            |
| body-md     | 20px              | 28px                | 20px               | 28px                 | 400         | 0px            |
| body-sm     | 16px              | 24px                | 16px               | 24px                 | 400         | 0px            |
| body-xs     | 14px              | 20px                | 14px               | 20px                 | 400         | 0px            |
| subheading  | 12px              | 16px                | 12px               | 16px                 | 700         | 1px            |
| caption     | 12px              | 16px                | 12px               | 16px                 | 400         | 0px            |

## Formatting Mixins
`@daffodil/design` also provides a few formatting mixins to enforce consistency and ease-of-use.

| Mixin                | Description                                                                                       |
| -------------------- --------------------------------------------------------------------------------------------------- |
| embolden             | Changes the weight of text to 700                                                                 |
| uppercase            | Changes the casing of a piece of text to uppercase                                                |
| single-line-ellipsis | Forces a line of text (with a fixed width) to ellipsis once it reaches the width of its container |