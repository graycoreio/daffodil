import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';

import {
	DaffContactSubmit,
	DaffContactSuccessSubmit,
	DaffContactFailedSubmit,
	DaffContactRetry,
	DaffContactCancel,
	DaffContactDriver,
	DaffContactUnion,
} from '@daffodil/contact';

import { DaffContactTestingDriverModule } from '@daffodil/contact/testing';

import { DaffContactEffects } from './contact.effects';

describe('DaffContactEffects', () => {
	let actions$: Observable<any>;
	let effects: DaffContactEffects<DaffContactUnion, any>;
	const mockForm = { firstName: 'John', lastName: 'Doe' };
	let daffContactDriver;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [DaffContactTestingDriverModule.forRoot()],
			providers: [DaffContactEffects, provideMockActions(() => actions$)],
		});
		effects = TestBed.get(DaffContactEffects);
		daffContactDriver = TestBed.get(DaffContactDriver);
	});

	it('should be created', () => {
		expect(effects).toBeTruthy();
  });
  
	describe('when a ContactSubscribe is triggered', () => {
		let expected;
    const forumSubmit = new DaffContactSubmit(mockForm);
    
		it('and if the call was successful, it should dispatch a ContactSuccessSubmit', () => {
			const successAction = new DaffContactSuccessSubmit();
			spyOn(daffContactDriver, 'send').and.returnValue(of('mystring'));

			actions$ = hot('--a', { a: forumSubmit });
			expected = cold('--b', { b: successAction });
			expect(effects.trySubmission$).toBeObservable(expected);
    });
    
		it('and if the call fails, it should dispatch a ContactFailedSubmit', () => {
			const error = ['Failed to submit'];
			const response = cold('#', {}, error);
			spyOn(daffContactDriver, 'send').and.returnValue(response);
			const failedAction = new DaffContactFailedSubmit(error);

			actions$ = hot('--a', { a: forumSubmit });
			expected = cold('--b', { b: failedAction });
			expect(effects.trySubmission$).toBeObservable(expected);
		});
  });
  
	describe('when a ContactRetry is triggered', () => {
		let expected;
    const forumSubmit = new DaffContactRetry(mockForm);
    
		it('and if the call was successful, it should dispatch a ContactSuccessSubmit', () => {
			const successAction = new DaffContactSuccessSubmit();
			spyOn(daffContactDriver, 'send').and.returnValue(of('mystring'));

			actions$ = hot('--a', { a: forumSubmit });
			expected = cold('--b', { b: successAction });
			expect(effects.trySubmission$).toBeObservable(expected);
    });
    
		it('and if the call fails, it should dispatch a ContactFailedSubmit', () => {
			const error = ['Failed to submit'];
			const response = cold('#', {}, error);
			spyOn(daffContactDriver, 'send').and.returnValue(response);
			const failedAction = new DaffContactFailedSubmit(error);

			actions$ = hot('--a', { a: forumSubmit });
			expected = cold('--b', { b: failedAction });
			expect(effects.trySubmission$).toBeObservable(expected);
		});
  });
  
	describe('when a ContactCancel is triggered', () => {
		let expected;
		const forumSubmit = new DaffContactSubmit(mockForm);
    const forumCancel = new DaffContactCancel();
    
		it('it should return an empty observable', () => {
			actions$ = hot('---d-----', {
				d: forumCancel,
			});
			expected = cold('---------');

			expect(effects.trySubmission$).toBeObservable(expected);
    });
    
		it('it should cancel a ContactSubmit action', () => {
			actions$ = hot('--(ad)----', {
				a: forumSubmit,
				d: forumCancel,
			});
			expected = cold('--------');

			expect(effects.trySubmission$).toBeObservable(expected);
		});
	});
});
