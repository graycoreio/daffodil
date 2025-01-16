import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DaffRouteWithNamedViews } from '@daffodil/router';

import { DaffRouterNamedViewOutletDirective } from './outlet.directive';

@Component({
  template: `
    <ng-container *ngIf="view" [daffRouterNamedViewOutlet]="view"></ng-container>
  `,
  standalone: false,
})
class WrapperComponent {
  view?: string;
}

@Component({
  template: 'component A',
  standalone: false,
})
class AComponent {}

@Component({
  template: 'component B',
  standalone: false,
})
class BComponent {}

describe('@daffodil/router | DaffRouterNamedViewOutletDirective', () => {
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
        daffNamedViews: {
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
        daffNamedViews: {
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
          daffNamedViews: {
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
          daffNamedViews: {},
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
          daffNamedViews: {},
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
          daffNamedViews: {
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
