import {
	Router,
	UrlSegment,
} from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { daffConvertToPath } from './convert-to-path';

describe('@daffodil/external-router | daffConvertToPath', () => {
	let router: Router;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
		});

		router = TestBed.get(Router);
	});

	it('convert a segments array to a path', () => {
		const segments: UrlSegment[] = [
			{ path: 'some-path' } as UrlSegment,
			{ path: 'to' } as UrlSegment,
			{ path: 'a' } as UrlSegment,
			{ path: 'item' } as UrlSegment
		];

		expect(daffConvertToPath(segments)).toEqual('some-path/to/a/item');
	});
});
