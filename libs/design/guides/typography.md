# Typography
Daffodil uses typography to establish hierarchy, organize information, and guide our users through a product or experience.

## Usage
To include typography in your project, you can add the following to your Sass file:

```scss
@use '@daffodil/design/scss/typography';
```

## Type scale
The typographic scale is designed with visual distinctions to help users better understand content and UI. Text sizes, styles, and layouts have been chosen to maintain logical hierarchies and drive consistency throughout an application.

### 8px system
Our type scale is based on an 8px system, where the type is largely divisible by 8. For smaller sizes, the system allows for the scale to be divisible by 4. Font sizes are typically smaller on mobile and scaled up at the `tablet` breakpoint to be larger on desktop.

## Default font stack
By default, Daffodil uses a system font stack to maximize on performance, legibility, and accessibility. System fonts play into the improvement of today's rich displays Additionally, system fonts provides a seamless experience for users because the application feel more like it blends in with their device's OS.

### Sans-serif font stack
```scss
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
```

### Serif font stack
```scss
$font-family-mono: ui-monospace, 'SFMono-Regular', SF Mono, Menlo, Consolas, 'Liberation Mono', monospace;
```

To customize your project's font stack, you can pass the `$font-family-base` variable to the typography package in your `style.scss` file:

```scss
@use '@daffodil/design/scss/typography' with (
	$font-family-base: 'Arial',
);
```

## Typography mixins
Typography mixins are used to keep typography consistent with logical hierarchies. Utilizing the mixin ensures that content within the UI are clear and easily recognizable. Mixins are available for headlines, body, subheading, and caption. They are used within the `@daffodil/design` components and can also be used within custom CSS.

The headline mixins are responsive and will adjust at the `tablet` breakpoint.

| Mixin         | Font size: mobile | Line height: mobile | Font size: desktop | Line height: desktop | Font weight | Letter spacing |
| ------------- | ----------------- | ------------------- | ------------------ | -------------------- | ----------- | -------------- |
| `headline-xl` | 40px              | 48px                | 56px               | 64px                 | 700         | 0px            |
| `headline-lg` | 32px              | 36px                | 48px               | 56px                 | 700         | 0px            |
| `headline-md` | 24px              | 28px                | 32px               | 40px                 | 700         | 0px            |
| `headline-sm` | 20px              | 24px                | 24px               | 32px                 | 700         | 0px            |
| `body-lg`     | 24px              | 32px                | 24px               | 32px                 | 400         | 0px            |
| `body-md`     | 20px              | 28px                | 20px               | 28px                 | 400         | 0px            |
| `body-sm`     | 16px              | 24px                | 16px               | 24px                 | 400         | 0px            |
| `body-xs`     | 14px              | 20px                | 14px               | 20px                 | 400         | 0px            |
| `subheading`  | 14px              | 16px                | 14px               | 16px                 | 700         | 0.5px          |
| `caption`     | 12px              | 16px                | 12px               | 16px                 | 400         | 0px            |

```scss
@use '@daffodil/design/scss/typography';

.title {
	@include typography.headline-xl();
}
```

## Other mixins
`@daffodil/design` also provides a few mixins to enforce consistency and ease-of-use. We recommend using the utility classes sparingly.

| Mixin   | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| uppercase     | Changes the casing of a piece of text to uppercase                           |
| text-truncate | Forces a line of text to ellipsis once it reaches the width of its container. It should only be used if the element has a display of `block` or `inline-block`. |

You can access the typography utility classes and mixins in your project by adding the following to your Sass file:

```scss
@use '@daffodil/design/scss/typography';
```

## Typography variables

| Variable          | Value    |
| ----------------- | -------- |
| `$font-size-lg`   | 1.5rem   |
| `$font-size-md`   | 1.25rem  |
| `$font-size-base` | 1rem     |
| `$font-size-sm`   | 0.875rem |
