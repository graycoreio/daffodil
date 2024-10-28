/**
 * The DaffState enumerates the vast majority of state modifications that can exist
 * in UI applications.
 */
export const enum DaffState {
  /**
   * The 'Stable' state represents when no action is being taken upon an object.
   */
  Stable = 'Stable',

  /**
   * The 'Resolving' state represents when there's uncertainty in the current status
   * of a state, e.g. when we're loading something that hasn't been loaded into
   * state before.
   */
  Resolving = 'Resolving',

  /**
   * The 'Adding' state represents a temporary period while an item is being
   * added to state.
   */
  Adding = 'Adding',

  /**
   * The 'Added' state represents when an object was recently added to state.
   * This typically is associated with a subsequent decay to a 'Stable' state.
   */
  Added = 'Added',

  /**
   * The 'Updating' state describes when an object that currently exists in state
   * is being changed in some way.
   *
   * Disambiguation: This has nothing to do with immutability.
   */
  Updating = 'Updating',

  /**
   * The 'Mutated' state describes when an object has recently been modified in
   * state. This state is typically associated with a subsequent decay into a
   * 'Stable' state.
   */
  Updated = 'Updated',

  /**
   * @deprecated in favor of {@link DaffState.Updating} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Mutating = 'Updating',

  /**
   * @deprecated in favor of {@link DaffState.Updated} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Mutated = 'Updated',

  /**
   * The "Deleting" state occurs when an object is in the process of being
   * removed from state.
   */
  Deleting = 'Deleting',

  /**
   * An alias for 'Stable'.
   *
   * @deprecated Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   * Use DaffState.Stable instead.
   */
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Complete = 'Stable',

  /**
   * Indicates that the most recent operation specififc to this entity has failed.
   */
  Error = 'Error'
}
