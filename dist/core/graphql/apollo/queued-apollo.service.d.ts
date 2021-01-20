import { Apollo } from 'apollo-angular';
import { R } from 'apollo-angular/types';
import { MutationOptions } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { Observable } from 'rxjs';
/**
 * A service that will queue mutate calls to Apollo.
 * It will not send subsequent mutate requests until the previous one has been completed.
 * This is useful for avoiding race conditions on the backend.
 * This should be used alongside Apollo.
 */
export declare class DaffQueuedApollo {
    private apollo;
    queue: Function[];
    constructor(apollo: Apollo);
    /**
     * Queue up a mutate request.
     * The request will not actually be queued until the returned observable is subscribed.
     * If the queue is empty, the request will be sent when it enters the queue.
     * Otherwise, it will be sent when it reaches the front of the queue.
     * The observable will complete after it emits once.
     * @param options Mutation options.
     */
    mutate<T, V = R>(options: MutationOptions<T, V>): Observable<FetchResult<T>>;
    private addRequestToQueue;
    private finishRequestSubscription;
}
