/**
 * Retries failed Observables
 * @param maxTries The maximum number of tries the observable will be tried
 * @param ms The initial amount of time
 */
export declare function backoff(maxTries: number, ms: number): import("rxjs").UnaryFunction<import("rxjs").Observable<unknown>, import("rxjs").Observable<unknown>>;
