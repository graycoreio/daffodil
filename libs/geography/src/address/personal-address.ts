import { DaffAddress } from "./address";

/**
 * A specialized type of address useful for associating a physical address 
 * with a particular individual.
 */
export interface DaffPersonalAddress extends DaffAddress {
	prefix?: string;
	suffix?: string;
	firstname: string;
	middlename?: string;
	lastname: string;
	telephone: string;
	email?: string;
}
