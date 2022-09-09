export type DaffSidebarAnimationState = 'open' | 'closed' | 'none';

export const getAnimationState = (open: boolean, enabled: boolean = true): DaffSidebarAnimationState => {
  if(!enabled){
    return 'none';
  }
  if(open && enabled){
    return 'open';
  } else {
    return 'closed';
  }
};
