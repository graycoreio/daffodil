/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRadioComponent } from './radio.component';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';
import { DaffRadioControlValueAccessorDirective } from './cva/radio-cva.directive';
import { DaffRadioRegistry } from './registry/radio-registry';
var DaffRadioModule = /** @class */ (function () {
    function DaffRadioModule() {
    }
    DaffRadioModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        DaffRadioComponent,
                        DaffRadioSetComponent,
                        DaffRadioControlValueAccessorDirective,
                    ],
                    declarations: [
                        DaffRadioControlValueAccessorDirective,
                        DaffRadioComponent,
                        DaffRadioSetComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        DaffRadioRegistry
                    ]
                },] }
    ];
    return DaffRadioModule;
}());
export { DaffRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vcmFkaW8vcmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUk5RDtJQUFBO0lBbUIrQixDQUFDOztnQkFuQi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUM7d0JBQ04sa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHNDQUFzQztxQkFFdkM7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHNDQUFzQzt3QkFDdEMsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBQzt3QkFDUixpQkFBaUI7cUJBQ2xCO2lCQUNGOztJQUM4QixzQkFBQztDQUFBLEFBbkJoQyxJQW1CZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGFmZlJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZlJhZGlvU2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vcmFkaW8tc2V0L3JhZGlvLXNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZlJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL2N2YS9yYWRpby1jdmEuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhZmZSYWRpb1JlZ2lzdHJ5IH0gZnJvbSAnLi9yZWdpc3RyeS9yYWRpby1yZWdpc3RyeSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOltcbiAgICBEYWZmUmFkaW9Db21wb25lbnQsXG4gICAgRGFmZlJhZGlvU2V0Q29tcG9uZW50LFxuICAgIERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhZmZSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgIERhZmZSYWRpb0NvbXBvbmVudCxcbiAgICBEYWZmUmFkaW9TZXRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6W1xuICAgIERhZmZSYWRpb1JlZ2lzdHJ5XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlJhZGlvTW9kdWxlIHsgfVxuIl19