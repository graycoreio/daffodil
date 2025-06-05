import {
  computed,
  Directive,
  input,
} from '@angular/core';

@Directive({
  selector: '[daffioDocsTocHeader]',
  host: {
    '[attr.id]': 'id()',
  },
})
export class DaffioDocsTocHeaderDirective {
  readonly entry = computed(() => ({
    content: this.content(),
    lvl: this.level(),
    slug: this.id(),
  }));

  level = input.required<number, number | string>({ transform: Number });
  // TODO: figure out why making this required is breaking
  id = input<string>();
  content = input.required<string>();
}
