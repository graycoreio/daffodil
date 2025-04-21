import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export type DaffioDocsApiMemberHeading = 'method' | 'property' | 'function';

export enum DaffioDocsApiMemberHeadingEnum {
  Method = 'method',
  Property = 'property',
  Function = 'function',
}

@Component({
  selector: 'daffio-docs-member-heading',
  templateUrl: './member-heading.component.html',
  styleUrl: './member-heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffioDocsMemberHeadingComponent {
  @Input() type: DaffioDocsApiMemberHeading;

  @HostBinding('class.daffio-docs-member-heading') hostClass = true;

  /* eslint-disable quote-props */
  @HostBinding('class') get class() {
    return {
      'method': this.type === DaffioDocsApiMemberHeadingEnum.Method,
      'property': this.type === DaffioDocsApiMemberHeadingEnum.Property,
      'function': this.type === DaffioDocsApiMemberHeadingEnum.Function,
    };
  }
}
