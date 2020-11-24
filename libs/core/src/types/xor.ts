/**
 * The "Exclusive Or" (XOR) type means that for any instance of the type, it is either one of the two type constraints,
 * but never both nor neither. 
 * 
 * For example, The simplest scenario is when describing "name" vs. "firstName" and "lastName". Your typical object has
 * exactly one of the scenarios, but never both at the same time, nor no name at all. 
 * 
 * Inspired by the original Typescript Issue:
 * https://github.com/microsoft/TypeScript/issues/14094#issuecomment-373782604
 * 
 * An example usage would be:
 * 
 * ```ts
 * export type PersonWithName = {
 *   name: string;
 * }
 *
 * export type PersonWithPairedName = {
 *   firstName: string;
 *   lastName: string;
 * }
 *
 * export type Person = XOR<PersonWithName, PersonWithPairedName>;
 *
 * //Valid
 * const person1: Person = {
 *   firstName: "Damien",
 *   lastName: "Retzinger"
 * }
 * 
 * //Valid
 * const person2: Person = {
 *   name: "Damien Retzinger"
 * }
 *
 * //Invalid
 * const person3: Person = {
 *   name: "Damien Retzinger",
 *   firstName: "Damien",
 *   lastName: "Retzinger"
 * }
 * ```
 */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR <T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
