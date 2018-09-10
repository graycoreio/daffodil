export const getAnimationState = (open : boolean, enabled: boolean = true) => {
    if(open && enabled){
        return "open";
    }
    else {
        return "void";
    }
}