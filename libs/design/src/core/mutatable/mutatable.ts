/**
 * An interface for giving a component the ability to display a mutating UI.
 * In order to be mutatable, our class must implement this property.
 */
export interface DaffMutatable {
	mutate: boolean;
}