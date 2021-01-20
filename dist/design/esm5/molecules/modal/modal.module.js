/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { DaffBackdropModule } from '../backdrop/backdrop.module';
import { DaffModalComponent } from './modal/modal.component';
import { DaffModalHeaderComponent } from './modal-header/modal-header.component';
import { DaffModalTitleDirective } from './modal-title/modal-title.directive';
import { DaffModalContentComponent } from './modal-content/modal-content.component';
import { DaffModalActionsComponent } from './modal-actions/modal-actions.component';
var DaffModalModule = /** @class */ (function () {
    function DaffModalModule() {
    }
    DaffModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        PortalModule,
                        OverlayModule,
                        DaffBackdropModule
                    ],
                    exports: [
                        DaffModalHeaderComponent,
                        DaffModalTitleDirective,
                        DaffModalContentComponent,
                        DaffModalActionsComponent
                    ],
                    declarations: [
                        DaffModalComponent,
                        DaffModalHeaderComponent,
                        DaffModalTitleDirective,
                        DaffModalContentComponent,
                        DaffModalActionsComponent
                    ],
                    entryComponents: [
                        DaffModalComponent
                    ]
                },] }
    ];
    return DaffModalModule;
}());
export { DaffModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFcEY7SUFBQTtJQXdCK0IsQ0FBQzs7Z0JBeEIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3FCQUMxQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2Ysa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUFDOEIsc0JBQUM7Q0FBQSxBQXhCaEMsSUF3QmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgRGFmZkJhY2tkcm9wTW9kdWxlIH0gZnJvbSAnLi4vYmFja2Ryb3AvYmFja2Ryb3AubW9kdWxlJztcbmltcG9ydCB7IERhZmZNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGFmZk1vZGFsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYWZmTW9kYWxUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtdGl0bGUvbW9kYWwtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhZmZNb2RhbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRlbnQvbW9kYWwtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZk1vZGFsQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYWN0aW9ucy9tb2RhbC1hY3Rpb25zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgRGFmZkJhY2tkcm9wTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYWZmTW9kYWxIZWFkZXJDb21wb25lbnQsXG4gICAgRGFmZk1vZGFsVGl0bGVEaXJlY3RpdmUsXG4gICAgRGFmZk1vZGFsQ29udGVudENvbXBvbmVudCxcbiAgICBEYWZmTW9kYWxBY3Rpb25zQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhZmZNb2RhbENvbXBvbmVudCxcbiAgICBEYWZmTW9kYWxIZWFkZXJDb21wb25lbnQsXG4gICAgRGFmZk1vZGFsVGl0bGVEaXJlY3RpdmUsXG4gICAgRGFmZk1vZGFsQ29udGVudENvbXBvbmVudCxcbiAgICBEYWZmTW9kYWxBY3Rpb25zQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIERhZmZNb2RhbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNb2RhbE1vZHVsZSB7IH1cbiJdfQ==