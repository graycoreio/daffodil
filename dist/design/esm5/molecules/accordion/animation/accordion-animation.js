/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
/** @type {?} */
export var daffAccordionAnimations = {
    openAccordion: trigger('openAccordion', [
        state('open', style({
            visibility: 'visible',
            opacity: '1',
            height: '*'
        })),
        state('void', style({
            visibility: 'hidden',
            overflow: 'hidden',
            opacity: '0',
            height: '0'
        })),
        transition('void <=> open', animate('150ms ease-in'))
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvYWNjb3JkaW9uL2FuaW1hdGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FFUixNQUFNLHFCQUFxQixDQUFDOztBQUU3QixNQUFNLEtBQU8sdUJBQXVCLEdBRWhDO0lBQ0YsYUFBYSxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUU7UUFDdEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDbEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLEdBQUc7U0FDWixDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsZUFBZSxFQUN4QixPQUFPLENBQUMsZUFBZSxDQUFDLENBQ3pCO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZGFmZkFjY29yZGlvbkFuaW1hdGlvbnM6IHtcbiAgcmVhZG9ubHkgb3BlbkFjY29yZGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxufSA9IHtcbiAgb3BlbkFjY29yZGlvbjogdHJpZ2dlcignb3BlbkFjY29yZGlvbicsIFtcbiAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgIGhlaWdodDogJyonXG4gICAgfSkpLFxuICAgIHN0YXRlKCd2b2lkJyxzdHlsZSh7XG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIGhlaWdodDogJzAnXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IG9wZW4nLFxuICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicpLFxuICAgIClcbiAgXSlcbn07XG4iXX0=