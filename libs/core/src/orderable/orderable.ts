/**
 * An interface for models where the order of elements is important
 * and definable.
 *
 * Disambiguation: This is does not relate to ecommerce "Orders", e.g.a purchase.
 */
export interface DaffOrderable {
	order: number;
}
