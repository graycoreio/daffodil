# Debounce Decorator

A utility decorator that delays method execution until after a specified delay period has elapsed since it was last invoked.

## Usage

```ts
import { debounce } from '@daffodil/core';

class SearchComponent {
  @debounce(300)
  onSearchInput(value: string) {
    // Only executes after 300ms
    this.performSearch(value);
  }
}
```

## API

### `debounce(delay?: number): MethodDecorator`

- `delay` (optional): Delay in milliseconds. Defaults to 100ms.
- Returns a method decorator that can be applied to class methods.

## Examples

### With Default Delay (Uses 100ms default)
```typescript
@debounce() 
onInputChange(value: string) {
  console.log('Input changed:', value);
}
```

### Angular Component Integration
```typescript
@Component({
  selector: 'app-search',
  template: '<input (input)="onSearchInput($event.target.value)" />',
})
export class SearchComponent {
  @debounce(500)
  onSearchInput(value: string) {
    this.searchService.search(value);
  }
}
```
