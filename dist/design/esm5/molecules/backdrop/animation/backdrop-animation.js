/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, transition, trigger, } from '@angular/animations';
/** @type {?} */
var animationDuration = '350ms';
/** @type {?} */
var backdropTransitionOut = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
var backdropTransitionIn = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
export var daffBackdropAnimations = {
    fadeBackdrop: trigger('fadeBackdrop', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(animationDuration + ' ' + backdropTransitionIn, style({ opacity: 1 })),
        ]),
        transition(':leave', [
            animate(animationDuration + ' ' + backdropTransitionOut, style({ opacity: 0 }))
        ])
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AtYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9iYWNrZHJvcC9hbmltYXRpb24vYmFja2Ryb3AtYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUVQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxHQUVSLE1BQU0scUJBQXFCLENBQUM7O0lBRXZCLGlCQUFpQixHQUFHLE9BQU87O0lBQzNCLHFCQUFxQixHQUFHLDhCQUE4Qjs7SUFDdEQsb0JBQW9CLEdBQUcsZ0NBQWdDOztBQUU3RCxNQUFNLEtBQU8sc0JBQXNCLEdBRS9CO0lBQ0YsWUFBWSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUU7UUFDcEMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvRSxDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGLENBQUM7S0FDSCxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gJzM1MG1zJztcbmNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbk91dCA9ICdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpJztcbmNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkluID0gJ2N1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKSdcblxuZXhwb3J0IGNvbnN0IGRhZmZCYWNrZHJvcEFuaW1hdGlvbnM6IHtcbiAgcmVhZG9ubHkgZmFkZUJhY2tkcm9wOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG59ID0ge1xuICBmYWRlQmFja2Ryb3A6IHRyaWdnZXIoJ2ZhZGVCYWNrZHJvcCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICBhbmltYXRlKGFuaW1hdGlvbkR1cmF0aW9uICsgJyAnICsgYmFja2Ryb3BUcmFuc2l0aW9uSW4sIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgYW5pbWF0ZShhbmltYXRpb25EdXJhdGlvbiArICcgJyArIGJhY2tkcm9wVHJhbnNpdGlvbk91dCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgIF0pXG4gIF0pXG59O1xuIl19