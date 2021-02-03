import {Apollo, gql} from 'apollo-angular';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { TestBed } from '@angular/core/testing';
import { interval } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { DaffQueuedApollo } from './queued-apollo.service'

describe('Core | GraphQL | DaffQueuedApollo', () => {
  let service: DaffQueuedApollo;
  let apollo: Apollo;
  let apolloMutateSpy: jasmine.Spy;
  let testScheduler: TestScheduler;

  const req0 = gql`
    mutation TestRequest0 {
      mutate0(arg: "test") {
        field
      }
    }
  `;
  const req1 = gql`
    mutation TestRequest1 {
      mutate1(arg: "test") {
        field
      }
    }
  `;
  const data0 = {
    data: {
      mutate0: {
        field: 'test'
      }
    }
  };
  const data1 = {
    data: {
      mutate1: {
        field: 'test'
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
    });

    testScheduler = new TestScheduler((a, b) => {
      expect(a).toEqual(b)
    });
    service = TestBed.inject(DaffQueuedApollo);
    apollo = TestBed.inject(Apollo);

    apolloMutateSpy = spyOn(apollo, 'mutate');
  });

  describe('mutate | queueing mutate requests', () => {
    let ob0;
    let ob1;

    describe('canceling multiple queued mutate requests', () => {
      it('should not cancel other operations', () => {
        testScheduler.run(({cold, expectObservable}) => {
          apolloMutateSpy.withArgs(jasmine.objectContaining({
            mutation: req0
          })).and.returnValue(cold('--a', {a: data0}))
          apolloMutateSpy.withArgs(jasmine.objectContaining({
            mutation: req1
          })).and.returnValue(cold('--a', {a: data1}))

          ob0 = interval(500).pipe(
            take(2),
            switchMap(() =>
              service.mutate({
                mutation: req0
              }).pipe(
                delay(750)
              )
            ),
          );
          ob1 = interval(600).pipe(
            take(1),
            switchMap(() =>
              service.mutate({
                mutation: req1
              }).pipe(
                delay(500)
              )
            ),
          );

          expectObservable(ob0).toBe('1752ms (a|)', {a: data0});
          expectObservable(ob1).toBe('1102ms (a|)', {a: data1});
        })
      })
    })

    describe('when multiple requests are made', () => {
      describe('and the first one completes successfully', () => {
        it('should make the second request after the first one completes', () => {
          testScheduler.run(({cold, expectObservable}) => {
            apolloMutateSpy.withArgs(jasmine.objectContaining({
              mutation: req0
            })).and.returnValue(cold('--a', {a: data0}))
            apolloMutateSpy.withArgs(jasmine.objectContaining({
              mutation: req1
            })).and.returnValue(cold('--a', {a: data1}))

            ob0 = service.mutate({
              mutation: req0
            });
            ob1 = service.mutate({
              mutation: req1
            });

            expectObservable(ob0).toBe('--(a|)', {a: data0});
            expectObservable(ob1).toBe('----(a|)', {a: data1});
          })
        });
      });

      describe('and the first one throws an error', () => {
        it('should make the second request after the first one throws an error', () => {
          testScheduler.run(({cold, expectObservable}) => {
            apolloMutateSpy.withArgs(jasmine.objectContaining({
              mutation: req0
            })).and.returnValue(cold('--#', {}, 'error'))
            apolloMutateSpy.withArgs(jasmine.objectContaining({
              mutation: req1
            })).and.returnValue(cold('--a', {a: data1}))

            ob0 = service.mutate({
              mutation: req0
            });
            ob1 = service.mutate({
              mutation: req1
            });

            expectObservable(ob0).toBe('--#', {}, 'error');
            expectObservable(ob1).toBe('----(a|)', {a: data1});
          })
        });
      });
    });

    describe('when the apollo request observable completes', () => {
      it('should complete the returned observable', () => {
        testScheduler.run(({cold, expectObservable}) => {
          apolloMutateSpy.withArgs(jasmine.objectContaining({
            mutation: req0
          })).and.returnValue(cold('--|'))

          ob0 = service.mutate({
            mutation: req0
          });

          expectObservable(ob0).toBe('--|');
        })
      })
    })

    it('should unsubscribe from the apollo request observable after it emits once', () => {
      testScheduler.run(({cold, expectObservable}) => {
        apolloMutateSpy.withArgs(jasmine.objectContaining({
          mutation: req0
        })).and.returnValue(cold('--a--a', {a: data0}))

        ob0 = service.mutate({
          mutation: req0
        });

        expectObservable(ob0).toBe('--(a|)', {a: data0});
      })
    })

    describe('when apollo throws an error', () => {
      it('should pass that error to the returned observable', () => {
        const error = new Error('error');
        testScheduler.run(({cold, expectObservable}) => {
          apolloMutateSpy.withArgs(jasmine.objectContaining({
            mutation: req0
          })).and.returnValue(cold('--#', {}, error))

          ob0 = service.mutate({
            mutation: req0
          });

          expectObservable(ob0).toBe('--#', {}, error);
        })
      });
    });
  });
});
