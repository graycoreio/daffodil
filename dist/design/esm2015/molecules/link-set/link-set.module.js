/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLinkSetComponent } from './link-set/link-set.component';
import { DaffLinkSetSubheadingDirective } from './link-set-subheading/link-set-subheading.directive';
import { DaffLinkSetHeadingDirective } from './link-set-heading/link-set-heading.directive';
import { DaffLinkSetItemComponent } from './link-set-item/link-set-item.component';
export class DaffLinkSetModule {
}
DaffLinkSetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    DaffLinkSetComponent,
                    DaffLinkSetHeadingDirective,
                    DaffLinkSetSubheadingDirective,
                    DaffLinkSetItemComponent
                ],
                declarations: [
                    DaffLinkSetComponent,
                    DaffLinkSetHeadingDirective,
                    DaffLinkSetSubheadingDirective,
                    DaffLinkSetItemComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1zZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9saW5rLXNldC9saW5rLXNldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBbUJuRixNQUFNLE9BQU8saUJBQWlCOzs7WUFqQjdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQiwyQkFBMkI7b0JBQzNCLDhCQUE4QjtvQkFDOUIsd0JBQXdCO2lCQUN6QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQiwyQkFBMkI7b0JBQzNCLDhCQUE4QjtvQkFDOUIsd0JBQXdCO2lCQUN6QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZMaW5rU2V0Q29tcG9uZW50IH0gZnJvbSAnLi9saW5rLXNldC9saW5rLXNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZkxpbmtTZXRTdWJoZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9saW5rLXNldC1zdWJoZWFkaW5nL2xpbmstc2V0LXN1YmhlYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhZmZMaW5rU2V0SGVhZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vbGluay1zZXQtaGVhZGluZy9saW5rLXNldC1oZWFkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYWZmTGlua1NldEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xpbmstc2V0LWl0ZW0vbGluay1zZXQtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYWZmTGlua1NldENvbXBvbmVudCxcbiAgICBEYWZmTGlua1NldEhlYWRpbmdEaXJlY3RpdmUsXG4gICAgRGFmZkxpbmtTZXRTdWJoZWFkaW5nRGlyZWN0aXZlLFxuICAgIERhZmZMaW5rU2V0SXRlbUNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYWZmTGlua1NldENvbXBvbmVudCxcbiAgICBEYWZmTGlua1NldEhlYWRpbmdEaXJlY3RpdmUsXG4gICAgRGFmZkxpbmtTZXRTdWJoZWFkaW5nRGlyZWN0aXZlLFxuICAgIERhZmZMaW5rU2V0SXRlbUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZMaW5rU2V0TW9kdWxlIHt9XG4iXX0=