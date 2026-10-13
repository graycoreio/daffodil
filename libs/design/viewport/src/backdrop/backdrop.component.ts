import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

/**
 * The backdrop is an overlay that sits behind an open sidebar and above the
 * viewport content. Clicking it emits `backdropClicked`, which is typically
 * used to close the sidebar.
 */
@Component({
  selector: 'daff-viewport-backdrop',
  template: '<ng-content></ng-content>',
  styleUrl: './backdrop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.interactable]': 'interactable()',
    '[class.transparent]': 'transparent()',
    '[class.fullscreen]': 'fullscreen()',
    '(click)': 'onBackdropClicked()',
  },
})
export class DaffViewportBackdropComponent {
  /**
   * Determines whether or not the backdrop is interactable. A non-interactable
   * backdrop is faded out and ignores pointer events.
   */
  interactable = input(true);

  /**
   * Determines whether or not the backdrop is transparent.
   */
  transparent = input(false);

  /**
   * Whether or not the backdrop should fill up its containing window.
   */
  fullscreen = input(false);

  /**
   * Event triggered when the backdrop is clicked.
   */
  backdropClicked = output<void>();

  /**
   * @docs-private
   */
  onBackdropClicked(): void {
    this.backdropClicked.emit();
  }
}
