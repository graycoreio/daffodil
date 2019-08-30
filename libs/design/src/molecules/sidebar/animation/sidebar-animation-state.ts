import { DaffSidebarMode } from "../helper/sidebar-mode";
import { DaffSidebarAnimationStates } from "./sidebar-animation";

export const getAnimationState = (open : boolean, mode: DaffSidebarMode) => {
    if(!open && mode == "push"){
        return DaffSidebarAnimationStates.CLOSED_PUSH;
    }
    else if(!open && mode == "over") {
        return DaffSidebarAnimationStates.CLOSED_OVER;
    }
    else if(open && mode == "push") {
        return DaffSidebarAnimationStates.OPEN_PUSH;
    }
    else if (mode == "side"){
        return DaffSidebarAnimationStates.OPEN_SIDE;
    }
    else {
        return DaffSidebarAnimationStates.OPEN;
    }
}