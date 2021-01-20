/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffFeatureComponent } from './feature/feature.component';
import { CommonModule } from '@angular/common';
import { DaffFeatureTitleDirective } from './feature-title/feature-title.directive';
import { DaffFeatureSubtitleDirective } from './feature-subtitle/feature-subtitle.directive';
import { DaffFeatureIconDirective } from './feature-icon/feature-icon.directive';
import { DaffFeatureSubheaderDirective } from './feature-subheader/feature-subheader.directive';
var DaffFeatureModule = /** @class */ (function () {
    function DaffFeatureModule() {
    }
    DaffFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffFeatureComponent,
                        DaffFeatureTitleDirective,
                        DaffFeatureSubtitleDirective,
                        DaffFeatureIconDirective,
                        DaffFeatureSubheaderDirective
                    ],
                    exports: [
                        DaffFeatureComponent,
                        DaffFeatureTitleDirective,
                        DaffFeatureSubtitleDirective,
                        DaffFeatureIconDirective,
                        DaffFeatureSubheaderDirective
                    ]
                },] }
    ];
    return DaffFeatureModule;
}());
export { DaffFeatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2ZlYXR1cmUvZmVhdHVyZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRWhHO0lBQUE7SUFtQmlDLENBQUM7O2dCQW5CakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3FCQUM5QjtpQkFDRjs7SUFDZ0Msd0JBQUM7Q0FBQSxBQW5CbEMsSUFtQmtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYWZmRmVhdHVyZVRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9mZWF0dXJlLXRpdGxlL2ZlYXR1cmUtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhZmZGZWF0dXJlU3VidGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL2ZlYXR1cmUtc3VidGl0bGUvZmVhdHVyZS1zdWJ0aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGFmZkZlYXR1cmVJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9mZWF0dXJlLWljb24vZmVhdHVyZS1pY29uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYWZmRmVhdHVyZVN1YmhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZmVhdHVyZS1zdWJoZWFkZXIvZmVhdHVyZS1zdWJoZWFkZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYWZmRmVhdHVyZUNvbXBvbmVudCxcbiAgICBEYWZmRmVhdHVyZVRpdGxlRGlyZWN0aXZlLFxuICAgIERhZmZGZWF0dXJlU3VidGl0bGVEaXJlY3RpdmUsXG4gICAgRGFmZkZlYXR1cmVJY29uRGlyZWN0aXZlLFxuICAgIERhZmZGZWF0dXJlU3ViaGVhZGVyRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYWZmRmVhdHVyZUNvbXBvbmVudCxcbiAgICBEYWZmRmVhdHVyZVRpdGxlRGlyZWN0aXZlLFxuICAgIERhZmZGZWF0dXJlU3VidGl0bGVEaXJlY3RpdmUsXG4gICAgRGFmZkZlYXR1cmVJY29uRGlyZWN0aXZlLFxuICAgIERhZmZGZWF0dXJlU3ViaGVhZGVyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkZlYXR1cmVNb2R1bGUgeyB9XG4iXX0=