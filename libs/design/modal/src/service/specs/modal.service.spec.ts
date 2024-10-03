import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  NgModule,
  ViewContainerRef,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
  flush,
  fakeAsync,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../../modal/modal.component';
import { DaffModalService } from '../modal.service';

@Component({
  template: `
		<p>It works!</p>
	`,
  standalone: true,
})
class DynamicComponent {}


@Component({
  template: '',
  standalone: true,
})
class WrapperComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('@daffodil/design/modal | DaffModalService', () => {
  let service: DaffModalService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicComponent,
        DaffModalComponent,
        NoopAnimationsModule,
        WrapperComponent,

      ],
      providers: [
        DaffModalService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(DaffModalService);
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
    wrapper = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('opening a modal', () => {
    it('should be able to open a modal with a given component', () => {
      expect(overlayContainerElement.textContent).not.toContain('It works!');
      service.open(DynamicComponent);
      expect(overlayContainerElement.textContent).toContain('It works!');
    });

    it('should allow a user to override what happens when the backdrop is clicked', () => {
      let count = 0;
      service.open(DynamicComponent, {
        onBackdropClicked: () => {
          count++;
        },
      });
      const backdrop = <HTMLElement>overlayContainerElement.querySelector(
        '.cdk-overlay-backdrop',
      );
      backdrop.click();
      expect(count).toEqual(1);
      expect(overlayContainerElement.textContent).toContain('It works!');
    });
  });

  describe('the default configuration', () => {
    it('should configure the modal to close when the backdrop is clicked', fakeAsync(() => {
      service.open(DynamicComponent);
      expect(overlayContainerElement.textContent).toContain('It works!');
      const backdrop = <HTMLElement>overlayContainerElement.querySelector(
        '.cdk-overlay-backdrop',
      );

      backdrop.click();
      fixture.detectChanges();
      flush();

      expect(overlayContainerElement.textContent).not.toContain('It works!');
    }));
  });
});
