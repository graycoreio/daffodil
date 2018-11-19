import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';

import { Observable, of } from 'rxjs';

import { hot, cold } from 'jasmine-marbles';

import { SidebarEffects } from './sidebar.effects';

describe('Daffio | SidebarEffects', () => {
  let effects: SidebarEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SidebarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a ROUTER_NAVIGATION occurs', () => {
    it('should dispatch CloseSidebar with a 10ms delay', () => {
      
    });
  });

});
