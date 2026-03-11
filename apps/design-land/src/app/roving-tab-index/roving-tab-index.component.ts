import { Component } from '@angular/core';

import { DesignLandArticleEncapsulatedModule } from '../core/article-encapsulated/article-encapsulated.module';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@Component({
  selector: 'design-land-roving-tab-index',
  templateUrl: './roving-tab-index.component.html',
  imports: [
    DesignLandExampleViewerModule,
    DesignLandArticleEncapsulatedModule,
  ],
})
export class DesignLandRtiComponent {}
