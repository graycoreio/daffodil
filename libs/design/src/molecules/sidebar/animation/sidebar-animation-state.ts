export const getAnimationState = (open : boolean, enabled: boolean = true) => {
    if(!enabled){return 'open';}
    if(open && enabled){
        return 'open';
    }
    else {
        return 'closed';
    }
}