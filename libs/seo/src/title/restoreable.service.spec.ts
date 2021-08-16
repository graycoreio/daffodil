import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { DaffRestoreableTitleService } from './restoreable.service';

describe('@daffodil/seo | DaffRestoreableTitleService', () => {
  let service: DaffRestoreableTitleService;
  let titleServiceSpy: jasmine.SpyObj<Title>;

  beforeEach(() => {
    titleServiceSpy = jasmine.createSpyObj('Title', ['setTitle']);

    TestBed.configureTestingModule({
      providers: [
        DaffRestoreableTitleService,
        {
          provide: Title,
          useValue: titleServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffRestoreableTitleService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('upsert', () => {
    let title: string;

    beforeEach(() => {
      title = 'title';
    });

    describe('when a title is passed', () => {
      beforeEach(() => {
        service.upsert(title);
      });

      it('should update the page title', () => {
        expect(titleServiceSpy.setTitle).toHaveBeenCalledOnceWith(title);
      });
    });

    describe('when a falsy title is passed', () => {
      beforeEach(() => {
        service.upsert(null);
      });

      it('should not update the page title', () => {
        expect(titleServiceSpy.setTitle).not.toHaveBeenCalled();
      });
    });
  });

  describe('clear', () => {
    beforeEach(() => {
      service.clear();
    });


    it('should remove the page title', () => {
      expect(titleServiceSpy.setTitle).toHaveBeenCalledOnceWith('');
    });
  });

  describe('restore', () => {
    describe('when a title has been upserted and cleared', () => {
      let title: string;

      beforeEach(() => {
        title = 'title';
        service.upsert(title);
        service.clear();

        service.restore();
      });

      it('should update the page title to the previously upserted title', () => {
        expect(titleServiceSpy.setTitle.calls.mostRecent().args[0]).toEqual(title);
        expect(titleServiceSpy.setTitle).toHaveBeenCalledTimes(3);
      });
    });

    describe('when a title has been upserted and cleared and a new title is upserted', () => {
      let title: string;
      let newTitle: string;

      beforeEach(() => {
        title = 'title';
        newTitle = 'newtitle';
        service.upsert(title);
        service.clear();
        service.upsert(newTitle);

        service.restore();
      });

      it('should restore the original title', () => {
        expect(titleServiceSpy.setTitle.calls.mostRecent().args[0]).toEqual(title);
        expect(titleServiceSpy.setTitle).toHaveBeenCalledTimes(4);
      });
    });
  });
});
