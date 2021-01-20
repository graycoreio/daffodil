import { Type } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { DaffModalConfiguration } from '../modal/modal-config';
import { DaffModal } from '../modal';
export declare class DaffModalService {
    private overlay;
    private _modals;
    constructor(overlay: Overlay);
    private defaultConfiguration;
    private _attachModal;
    private _attachModalContent;
    private _createOverlayRef;
    private _removeModal;
    open(component: Type<any>, configuration?: Partial<DaffModalConfiguration>): DaffModal;
    close(modal: DaffModal): void;
}
