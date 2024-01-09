import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DaffRouterNamedViewOutletDirective } from './outlet.directive';
import { DaffRouteWithNamedViews } from '../models/route.type';

@Component({
  template: `
    <ng-container *ngIf="view" [daffRouterNamedViewOutlet]="view"></ng-container>
  `,
})
class WrapperComponent {
  view?: string;
}

@Component({
  template: 'component A',
})
class AComponent {}

@Component({
  template: 'component B',
})
class BComponent {}

describe('DaffRouterNamedViewOutletDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let route: ActivatedRoute;
  let data: DaffRouteWithNamedViews['data'];
  let url: BehaviorSubject<any>;

  beforeEach(waitForAsync(() => {
    url = new BehaviorSubject(null);
    route = <ActivatedRoute><unknown>{
      url,
      get snapshot() {
        return {
          get data() {
            return data;
          },
          children: [],
        };
      },
    };

    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        AComponent,
        BComponent,
        DaffRouterNamedViewOutletDirective,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: route,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when the view is not set', () => {
    beforeEach(() => {
      wrapper.view = undefined;
      fixture.detectChanges();
    });

    it('should not render anything', () => {
      expect(fixture.debugElement.nativeElement.innerText).toEqual('');
    });
  });

  describe('when the view is set to a on a page without any named views specified', () => {
    beforeEach(() => {
      data = {};
      url.next('url');
      wrapper.view = 'a';
      fixture.detectChanges();
    });

    it('should not render anything', () => {
      expect(fixture.debugElement.nativeElement.innerText).toEqual('');
    });
  });

  describe('when the view is set to a on a page without the a named view specified', () => {
    beforeEach(() => {
      data = {
        namedViews: {
          b: BComponent,
        },
      };
      url.next('url');
      wrapper.view = 'a';
      fixture.detectChanges();
    });

    it('should not render anything', () => {
      expect(fixture.debugElement.nativeElement.innerText).toEqual('');
    });
  });

  describe('when the view is set to a on a page with the a named view specified', () => {
    beforeEach(() => {
      data = {
        namedViews: {
          a: AComponent,
          b: BComponent,
        },
      };
      url.next('url');
      wrapper.view = 'a';
      fixture.detectChanges();
    });

    it('should render the A component', () => {
      expect(fixture.debugElement.nativeElement.innerText).toEqual('component A');
    });

    describe('and when the data changes to a page with the a named view specified to a different component', () => {
      beforeEach(() => {
        data = {
          namedViews: {
            a: BComponent,
            b: BComponent,
          },
        };
        url.next('url');
        fixture.detectChanges();
      });

      it('should render the B component', () => {
        expect(fixture.debugElement.nativeElement.innerText).toEqual('component B');
      });
    });

    describe('and when the data changes to a page with the a named view unspecified', () => {
      beforeEach(() => {
        data = {
          namedViews: {},
        };
        url.next('url');
        fixture.detectChanges();
      });

      it('should not render anything', () => {
        expect(fixture.debugElement.nativeElement.innerText).toEqual('');
      });
    });

    describe('and when the view changes to an unspecified named view ', () => {
      beforeEach(() => {
        data = {
          namedViews: {},
        };
        url.next('url');
        wrapper.view = 'b';
        fixture.detectChanges();
      });

      it('should not render anything', () => {
        expect(fixture.debugElement.nativeElement.innerText).toEqual('');
      });
    });

    describe('and when the data changes to b', () => {
      beforeEach(() => {
        data = {
          namedViews: {
            a: AComponent,
            b: BComponent,
          },
        };
        url.next('url');
        wrapper.view = 'b';
        fixture.detectChanges();
      });

      it('should render the B component', () => {
        expect(fixture.debugElement.nativeElement.innerText).toEqual('component B');
      });
    });
  });
});
