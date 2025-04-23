import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

export type DaffioDocsApiItemLabelType = 'class' | 'type-alias' | 'interface' | 'const' | 'enum' | 'package' | 'function' | 'deprecated';

export enum DaffioDocsApiItemLabelTypeEnum {
  Class = 'class',
  TypeAlias = 'type-alias',
  Interface = 'interface',
  Const = 'const',
  Enum = 'enum',
  Package = 'package',
  Function = 'function',
  Deprecated = 'deprecated',
}

@Component({
  selector: 'daffio-docs-api-item-label',
  template: '<ng-content></ng-content>',
  styleUrl: './api-item-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsApiItemLabelComponent {
  @Input() type: DaffioDocsApiItemLabelType;

  @HostBinding('class.daffio-docs-api-item-label') hostClass = true;

  /* eslint-disable quote-props */
  @HostBinding('class') get class() {
    return {
      'class': this.type === DaffioDocsApiItemLabelTypeEnum.Class,
      'type-alias': this.type === DaffioDocsApiItemLabelTypeEnum.TypeAlias,
      'interface': this.type === DaffioDocsApiItemLabelTypeEnum.Interface,
      'const': this.type === DaffioDocsApiItemLabelTypeEnum.Const,
      'enum': this.type === DaffioDocsApiItemLabelTypeEnum.Enum,
      'package': this.type === DaffioDocsApiItemLabelTypeEnum.Package,
      'function': this.type === DaffioDocsApiItemLabelTypeEnum.Function,
      'deprecated': this.type === DaffioDocsApiItemLabelTypeEnum.Deprecated,
    };
  }
}
