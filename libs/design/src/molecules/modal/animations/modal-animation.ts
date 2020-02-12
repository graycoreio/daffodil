import {
	animate,
	state,
	style,
	transition,
	trigger,
	AnimationTriggerMetadata,
} from '@angular/animations';

export const daffFadeAnimations: {
	readonly fade: AnimationTriggerMetadata;
} = {
	fade: trigger('fade', [
		state('open', style({ opacity: 1, })),
		state('closed', style({ opacity: 0 })),
		transition('open <=> closed', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
	]),
};
