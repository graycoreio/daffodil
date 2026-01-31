import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsletterModule } from '../../../newsletter/newsletter.module';
import { FooterComponent } from '../../footer/footer.component';
import { DemoHeaderContainer } from '../../header/containers/header/header.component';
import { SidebarViewportContainer } from '../../sidebar/containers/sidebar-viewport/sidebar-viewport.component';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  imports: [
    RouterModule,
    DemoHeaderContainer,
    FooterComponent,
    SidebarViewportContainer,
    NewsletterModule,
  ],
})
export class TemplateComponent {}
