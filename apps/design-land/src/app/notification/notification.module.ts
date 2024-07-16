import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffNotificationModule } from '@daffodil/design/notification';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandNotificationRoutingModule } from './notification-routing-module';
import { DesignLandNotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    DesignLandNotificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignLandNotificationRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffArticleModule,
    DaffNotificationModule,
  ],
})
export class DesignLandNotificationModule {

}
