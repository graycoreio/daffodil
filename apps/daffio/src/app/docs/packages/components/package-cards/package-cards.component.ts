import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

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
  standalone: false,
})
export class DaffioDocsPackageCardsComponent {

  @Input() packagesList: DaffioPackage[];
}
