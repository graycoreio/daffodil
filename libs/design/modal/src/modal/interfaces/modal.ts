import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffModalComponent } from '../modal.component';

export interface DaffModal {
  /**
   * The reference to the modal in question
   */
  modal: ComponentRef<DaffModalComponent>;

  /**
   * The overlay associated with a given modal.
   */
  overlay: OverlayRef;
}

/**
 * Reference to modal instance.
 */
export interface DaffModalRef {
  /**
   * Closes the modal.
   */
  close(): void;

  /**
   * Emits when the modal close animation completes.
   */
  afterClosed: Observable<boolean>;
}
