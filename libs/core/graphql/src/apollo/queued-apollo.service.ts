import {Apollo} from 'apollo-angular';
import {MutationOptions, FetchResult} from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { EmptyObject } from 'apollo-angular/types';

import { Observable, Subscriber, Subscription } from 'rxjs';

/**
 * A service that will queue mutate calls to Apollo.
 * It will not send subsequent mutate requests until the previous one has been completed.
 * This is useful for avoiding race conditions on the backend.
 * This should be used alongside Apollo.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffQueuedApollo {
  queue: Function[] = [];

  constructor(
    private apollo: Apollo
  ) {}

  /**
   * Queue up a mutate request.
   * The request will not actually be queued until the returned observable is subscribed.
   * If the queue is empty, the request will be sent when it enters the queue.
   * Otherwise, it will be sent when it reaches the front of the queue.
   * The observable will complete after it emits once.
   * @param options Mutation options.
   */
  mutate<T, V = EmptyObject>(options: MutationOptions<T, V>): Observable<FetchResult<T>> {
    return new Observable(subscriber => this.addRequestToQueue(subscriber, this.apollo.mutate(options)))
  }

  private addRequestToQueue(subscriber: Subscriber<any>, request: Observable<any>): void {
    this.queue.push(() => {
      const sub = request.subscribe(
        response => {
          // emit the outer observable
          subscriber.next(response);
          subscriber.complete();

          this.finishRequestSubscription(sub);
        },
        error => {
          subscriber.error(error)
          this.finishRequestSubscription(sub);
        },
        () => {
          subscriber.complete()
          this.finishRequestSubscription(sub);
        }
      )
    });

    // start the queue if previously empty
    if (this.queue.length === 1) this.queue[0]();
  }

  private finishRequestSubscription(requestSubscription: Subscription): void {
    requestSubscription.unsubscribe();

    // process queue
    this.queue.shift();
    // TODO: optional chaining
    if (this.queue[0]) this.queue[0]();
  }
}
