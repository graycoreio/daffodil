/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
/** @type {?} */
const duration = '350ms';
/** @type {?} */
const sidebarAnimateRemainTransition = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
/** @type {?} */
const sidebarAnimateInTransition = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
const sidebarAnimateOutTransition = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
export const daffSidebarAnimations = {
    transformSidebar: trigger('transformSidebar', [
        // We remove the `transform` here completely, rather than setting it to zero, because:
        // 1. 3d transforms causes text to appear blurry on IE and Edge.
        state('open', style({
            'transform': 'none',
            'visibility': 'visible',
        })),
        transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
        transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ]),
    transformContent: trigger('transformContent', [
        state('closed', style({
            'transform': 'none',
        })),
        transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
        transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ])
};
/** @enum {string} */
const DaffSidebarAnimationStates = {
    OPEN: 'open',
    CLOSED: 'closed',
};
export { DaffSidebarAnimationStates };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL3NpZGViYXIvYW5pbWF0aW9uL3NpZGViYXItYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FFUixNQUFNLHFCQUFxQixDQUFDOztNQUV6QixRQUFRLEdBQUcsT0FBTzs7TUFDbEIsOEJBQThCLEdBQUcsZ0NBQWdDOztNQUNqRSwwQkFBMEIsR0FBRyxnQ0FBZ0M7O01BQzdELDJCQUEyQixHQUFHLDhCQUE4Qjs7QUFFbEUsTUFBTSxPQUFPLHFCQUFxQixHQUc1QjtJQUNGLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtRQUM1QyxzRkFBc0Y7UUFDdEYsZ0VBQWdFO1FBQ2hFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ2xCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFlBQVksRUFBRSxTQUFTO1NBQ3hCLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRywyQkFBMkIsQ0FBQyxDQUFDO1FBQ25GLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO0tBQ25GLENBQUM7SUFDRixnQkFBZ0IsRUFBRSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDNUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEIsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUM7UUFDbkYsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLDBCQUEwQixDQUFDLENBQUM7S0FDbkYsQ0FBQztDQUNIOzs7SUFHQyxNQUFRLE1BQU07SUFDZCxRQUFTLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgc3RhdGUsXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmlnZ2VyLFxuICAgIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgZHVyYXRpb24gPSAnMzUwbXMnO1xuY29uc3Qgc2lkZWJhckFuaW1hdGVSZW1haW5UcmFuc2l0aW9uID0gJ2N1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKSc7XG5jb25zdCBzaWRlYmFyQW5pbWF0ZUluVHJhbnNpdGlvbiA9ICdjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknO1xuY29uc3Qgc2lkZWJhckFuaW1hdGVPdXRUcmFuc2l0aW9uID0gJ2N1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSknO1xuICBcbmV4cG9ydCBjb25zdCBkYWZmU2lkZWJhckFuaW1hdGlvbnM6IHtcbiAgICByZWFkb25seSB0cmFuc2Zvcm1TaWRlYmFyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gICAgcmVhZG9ubHkgdHJhbnNmb3JtQ29udGVudDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICB9ID0ge1xuICAgIHRyYW5zZm9ybVNpZGViYXI6IHRyaWdnZXIoJ3RyYW5zZm9ybVNpZGViYXInLCBbXG4gICAgICAvLyBXZSByZW1vdmUgdGhlIGB0cmFuc2Zvcm1gIGhlcmUgY29tcGxldGVseSwgcmF0aGVyIHRoYW4gc2V0dGluZyBpdCB0byB6ZXJvLCBiZWNhdXNlOlxuICAgICAgLy8gMS4gM2QgdHJhbnNmb3JtcyBjYXVzZXMgdGV4dCB0byBhcHBlYXIgYmx1cnJ5IG9uIElFIGFuZCBFZGdlLlxuICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXG4gICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBhbmltYXRlKGR1cmF0aW9uICsgJyAnICsgc2lkZWJhckFuaW1hdGVPdXRUcmFuc2l0aW9uKSksXG4gICAgICB0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIGFuaW1hdGUoZHVyYXRpb24gKyAnICcgKyBzaWRlYmFyQW5pbWF0ZUluVHJhbnNpdGlvbikpXG4gICAgXSksXG4gICAgdHJhbnNmb3JtQ29udGVudDogdHJpZ2dlcigndHJhbnNmb3JtQ29udGVudCcsIFtcbiAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAnbm9uZScsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIGFuaW1hdGUoZHVyYXRpb24gKyAnICcgKyBzaWRlYmFyQW5pbWF0ZU91dFRyYW5zaXRpb24pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgYW5pbWF0ZShkdXJhdGlvbiArICcgJyArIHNpZGViYXJBbmltYXRlSW5UcmFuc2l0aW9uKSlcbiAgICBdKVxuICB9O1xuXG5leHBvcnQgZW51bSBEYWZmU2lkZWJhckFuaW1hdGlvblN0YXRlcyB7XG4gICAgT1BFTiA9ICAnb3BlbicsXG4gICAgQ0xPU0VEID0gJ2Nsb3NlZCdcbn0iXX0=