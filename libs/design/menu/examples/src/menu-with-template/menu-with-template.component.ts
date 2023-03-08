import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-with-template',
  templateUrl: './menu-with-template.component.html',
  styleUrls: ['./menu-with-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuWithTemplateComponent {
  @ViewChild('menuTemplate' ,{ read: TemplateRef }) menuTemplate: TemplateRef<unknown>;
}
