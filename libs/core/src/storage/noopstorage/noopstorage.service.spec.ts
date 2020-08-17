import { DaffNoopStorageService } from './noopstorage.service';

describe('DaffNoopStorageService', () => {
  let service: DaffNoopStorageService;

  beforeEach(() => {
    service = new DaffNoopStorageService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should not be able to set a value in memory', () => {
		service.setItem('testkey', 'testvalue');

		expect(service.getItem('testkey')).toEqual(undefined);
	});
	
	it('should not be able to retrieve a value from memory', () => {
    service.setItem('testkey', 'testvalue');

		expect(service.getItem('testkey')).toEqual(undefined);
	});
	
	it('should not be able to delete an item from memory', () => {
		service.setItem('testkey', 'testvalue');
		service.removeItem('testkey');

		expect(service.getItem('testkey')).toEqual(undefined);
	});
	
	it('should not be able to delete all items from memory', () => {
		service.setItem('testkey', 'testvalue');
		service.setItem('testkey2', 'testvalue2');
		 
		service.clear();

		expect(service.getItem('testkey')).toEqual(undefined);
		expect(service.getItem('testkey2')).toEqual(undefined);
	});
	
	it('should not persist data across all instances', () => {
		service.setItem('testkey', 'testvalue');
		expect(service.getItem('testkey')).toEqual(undefined);

		const service2 = new DaffNoopStorageService();
		expect(service2.getItem('testkey')).toEqual(undefined);
	});
});
