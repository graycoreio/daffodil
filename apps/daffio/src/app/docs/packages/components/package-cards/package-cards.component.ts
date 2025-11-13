import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';

export interface DaffioPackage {
  title: string;
  path: string;
  description: string;
}

@Component({
  selector: 'daffio-docs-package-cards',
  templateUrl: './package-cards.component.html',
  styleUrls: ['./package-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    RouterLink,
  ],
})
export class DaffioDocsPackageCardsComponent {

  @Input() packagesList: DaffioPackage[];
}
