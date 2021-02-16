/**
 * An interface for giving a component the ability to display a skeleton/loading UI.
 * In order to be skeletonable, our class must implement this property.
 */
export interface DaffSkeletonable {
	skeleton: boolean;
}