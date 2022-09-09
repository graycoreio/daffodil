export type DaffBackdropAnimationState = 'interactable' | 'non-interactable';
export const getAnimationState = (interactable: boolean): DaffBackdropAnimationState=> interactable ? 'interactable' : 'non-interactable';
