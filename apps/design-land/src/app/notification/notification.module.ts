import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { DesignLandNotificationRoutingModule } from './notification-routing-module';
import { DesignLandNotificationComponent } from './notification.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandNotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignLandNotificationRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffNotificationModule,
  ],
})
export class DesignLandNotificationModule {

}
