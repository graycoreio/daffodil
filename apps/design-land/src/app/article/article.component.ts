import { Component, Injector, ComponentFactoryResolver, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ArticleHeadingsComponent, ARTICLE_EXAMPLES } from './examples/public_api';

@Component({
  selector: 'design-land-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class DesignLandArticleComponent {}
