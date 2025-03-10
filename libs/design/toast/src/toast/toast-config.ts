export interface DaffToastConfiguration {
  /**
   * The duration (in milliseconds) for which a toast remains visible before dismissal.
   * By default, toasts without actions are displayed for 5000ms.
   *
   * While you can set a duration for toasts with actions, it's generally not recommended,
   * as users should have ample time to interact with them.
   *
   * @usage
   * ```
   * export class CustomComponent {
   *   private toast: DaffToast;
   *
   *   constructor(private toastService: DaffToastService) {}
   *
   *   open() {
   *     this.toast = this.toastService.open({
   *       title: 'Update Complete',
   *       message: 'This page has been updated to the newest version.',
   *       status: 'success',
   *     },
   *     {
   *       duration: 7000,
   *     });
   *   }
   * }
   * ```
   */
  duration?: number;
}

export const daffDefaultToastConfiguration: DaffToastConfiguration = {};
