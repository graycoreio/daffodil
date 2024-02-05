/**
 * A generalized event that happens to collide nicely with the Action interface 
 * of packages like Redux and @ngrx/store.
 */
export interface DaffAnalyticsEvent {

  /**
   * The type of the event to track. Used to deterrmine whether or not an action is analyzeable.
   */
  type: string;
}
