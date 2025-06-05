import {
  InputSignal,
  Type,
  WritableSignal,
} from '@angular/core';

import {
  DaffApiDocBase,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

export interface DaffioDocsApiDynamicContentFragment<T extends DaffApiDocBase = DaffApiDocBase> {
  readonly toc: InputSignal<WritableSignal<DaffDocTableOfContents>>;
  readonly child: InputSignal<boolean>;
  // TODO: find a way to make this type contravariant so we can remove any
  readonly doc: InputSignal<T | any>;
}

export interface DaffioDocsApiDynamicContentFragments<T extends DaffApiDocBase = DaffApiDocBase> {
  components: Array<Type<DaffioDocsApiDynamicContentFragment<T>>>;
};
