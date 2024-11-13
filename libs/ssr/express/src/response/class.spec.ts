import { Response } from 'express';

import { DaffSsrExpressResponse } from './class';

describe('@daffodil/ssr/express | DaffSsrExpressResponse', () => {
  let service: DaffSsrExpressResponse;
  let responseSpy: jasmine.SpyObj<Response>;

  beforeEach(() => {
    responseSpy = jasmine.createSpyObj('Response', [
      'getHeader',
      'setHeader',
      'appendHeader',
      'status',
    ]);

    service = new DaffSsrExpressResponse(responseSpy);
  });

  describe('get', () => {
    it('should get headers to the express response', () => {
      responseSpy.getHeader.withArgs('name').and.returnValue('value');
      expect(service.get('name')).toEqual('value');
    });
  });

  describe('set', () => {
    it('should set headers to the express response', () => {
      service.set('name', 'value');
      expect(responseSpy.setHeader).toHaveBeenCalledWith('name', 'value');
    });
  });

  describe('append', () => {
    it('should append headers to the express response', () => {
      service.append('name', 'value');
      expect(responseSpy.appendHeader).toHaveBeenCalledWith('name', 'value');
    });
  });

  describe('status', () => {
    it('should set the status code on the express response', () => {
      service.status(404);
      expect(responseSpy.status).toHaveBeenCalledWith(404);
    });
  });
});
