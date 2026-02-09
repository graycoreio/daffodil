# Theme Toggle
Theme toggle allows users to switch between light and dark themes.

## Usage
To use theme toggle, import `DaffSfThemeToggleComponent` into your custom component:

```ts
import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffSfThemeToggleComponent,
  ],
})
export class CustomComponent {}
```

## Accessibility
Theme toggle includes an `aria-label` that updates based on the current theme. It uses `aria-live="polite"` to announce theme changes to assistive technologies.
