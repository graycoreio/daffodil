import { DaffMemoryStorageService } from './memory.service';

describe('DaffMemoryStorageService', () => {
  let service: DaffMemoryStorageService;

  beforeEach(() => {
    service = new DaffMemoryStorageService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should be able to set a value in memory', () => {
		service.setItem('testkey', 'testvalue');

		expect(service.getItem('testkey')).toEqual('testvalue');
	});
	
	it('should be able to retrieve a value from memory', () => {
    service.setItem('testkey', 'testvalue');

		expect(service.getItem('testkey')).toEqual('testvalue');
	});
	
	it('should be able to delete an item from memory', () => {
		service.setItem('testkey', 'testvalue');
		service.removeItem('testkey');

		expect(service.getItem('testkey')).toEqual(undefined);
	});
	
	it('should be able to delete all items from memory', () => {
		service.setItem('testkey', 'testvalue');
		service.setItem('testkey2', 'testvalue2');
		 
		service.clear();

		expect(service.getItem('testkey')).toEqual(undefined);
		expect(service.getItem('testkey2')).toEqual(undefined);
	});
	
	it('should not persist data across all instances', () => {
		service.setItem('testkey', 'testvalue');
		expect(service.getItem('testkey')).toEqual('testvalue');

		const service2 = new DaffMemoryStorageService();
		expect(service2.getItem('testkey')).toEqual(undefined);
	});
});
