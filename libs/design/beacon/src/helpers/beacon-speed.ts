/**
 * The cadence of the beacon ring, e.g. how long one expand-and-fade cycle takes.
 *
 * - `slow` - a relaxed 3.6s cycle.
 * - `normal` - the default 2.4s cycle.
 * - `fast` - an urgent 1.2s cycle.
 */
export type DaffBeaconSpeed = 'slow' | 'normal' | 'fast';
