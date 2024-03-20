export type DaffSidebarViewportBackdropAnimationState = 'interactable' | 'non-interactable';
export const getAnimationState = (interactable: boolean): DaffSidebarViewportBackdropAnimationState=> interactable ? 'interactable' : 'non-interactable';
