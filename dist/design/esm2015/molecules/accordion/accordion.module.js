/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffAccordionComponent } from './accordion/accordion.component';
import { DaffAccordionItemComponent } from './accordion-item/accordion-item.component';
import { DaffAccordionItemTitleDirective } from './accordion-item-title/accordion-item-title.directive';
import { DaffAccordionItemContentDirective } from './accordion-item-content/accordion-item-content.directive';
export class DaffAccordionModule {
}
DaffAccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    DaffPrefixSuffixModule
                ],
                declarations: [
                    DaffAccordionComponent,
                    DaffAccordionItemComponent,
                    DaffAccordionItemTitleDirective,
                    DaffAccordionItemContentDirective
                ],
                exports: [
                    DaffAccordionComponent,
                    DaffAccordionItemComponent,
                    DaffAccordionItemTitleDirective,
                    DaffAccordionItemContentDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBc0I5RyxNQUFNLE9BQU8sbUJBQW1COzs7WUFwQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFFWixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQiwrQkFBK0I7b0JBQy9CLGlDQUFpQztpQkFDbEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQiwrQkFBK0I7b0JBQy9CLGlDQUFpQztpQkFDbEM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IERhZmZQcmVmaXhTdWZmaXhNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL3ByZWZpeC1zdWZmaXgvcHJlZml4LXN1ZmZpeC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYWZmQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYWZmQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IERhZmZBY2NvcmRpb25JdGVtVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLXRpdGxlL2FjY29yZGlvbi1pdGVtLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYWZmQWNjb3JkaW9uSXRlbUNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLWNvbnRlbnQvYWNjb3JkaW9uLWl0ZW0tY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIERhZmZQcmVmaXhTdWZmaXhNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGFmZkFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBEYWZmQWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcbiAgICBEYWZmQWNjb3JkaW9uSXRlbVRpdGxlRGlyZWN0aXZlLFxuICAgIERhZmZBY2NvcmRpb25JdGVtQ29udGVudERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRGFmZkFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBEYWZmQWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcbiAgICBEYWZmQWNjb3JkaW9uSXRlbVRpdGxlRGlyZWN0aXZlLFxuICAgIERhZmZBY2NvcmRpb25JdGVtQ29udGVudERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBY2NvcmRpb25Nb2R1bGUgeyB9XG4iXX0=