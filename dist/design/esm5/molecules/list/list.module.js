/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffListComponent } from './list/list.component';
import { DaffListSubheaderDirective } from './list-subheader/list-subheader.directive';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
var DaffListModule = /** @class */ (function () {
    function DaffListModule() {
    }
    DaffListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffPrefixSuffixModule
                    ],
                    declarations: [
                        DaffListComponent,
                        DaffListSubheaderDirective,
                        DaffListItemComponent
                    ],
                    exports: [
                        DaffListComponent,
                        DaffListSubheaderDirective,
                        DaffListItemComponent,
                        DaffPrefixSuffixModule
                    ]
                },] }
    ];
    return DaffListModule;
}());
export { DaffListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGO0lBQUE7SUFpQjhCLENBQUM7O2dCQWpCOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHNCQUFzQjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQixzQkFBc0I7cUJBQ3ZCO2lCQUNGOztJQUM2QixxQkFBQztDQUFBLEFBakIvQixJQWlCK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYWZmTGlzdFN1YmhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vbGlzdC1zdWJoZWFkZXIvbGlzdC1zdWJoZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhZmZMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZlByZWZpeFN1ZmZpeE1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvcHJlZml4LXN1ZmZpeC9wcmVmaXgtc3VmZml4Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRGFmZlByZWZpeFN1ZmZpeE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYWZmTGlzdENvbXBvbmVudCxcbiAgICBEYWZmTGlzdFN1YmhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYWZmTGlzdEl0ZW1Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERhZmZMaXN0Q29tcG9uZW50LFxuICAgIERhZmZMaXN0U3ViaGVhZGVyRGlyZWN0aXZlLFxuICAgIERhZmZMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBEYWZmUHJlZml4U3VmZml4TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkxpc3RNb2R1bGUgeyB9Il19