export const getAnimationState = (open : boolean, enabled: boolean = true) => {
    if(open && enabled){
        return "open";
    }
    else if(open && !enabled) {
        return "open-instant";
    }
    else {
        return "void";
    }
}