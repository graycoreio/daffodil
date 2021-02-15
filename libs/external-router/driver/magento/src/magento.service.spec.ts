import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternalRouterMagentoDriver } from './magento.service';
import { DaffExternalRouterDriverMagentoModule } from './magento.module';

describe('@daffodil/external-router/driver/magento | DaffExternalRouterMagentoDriver', () => {
	let service: DaffExternalRouterMagentoDriver;
	let scheduler: TestScheduler;

	const setupTest = (
	) => {
		TestBed.configureTestingModule({
			imports: [DaffExternalRouterDriverMagentoModule.forRoot()],
		});
		service = TestBed.get(DaffExternalRouterMagentoDriver);

		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	};

	it('should be created', () => {
		setupTest();
		expect(service).toBeTruthy();
	});
});
