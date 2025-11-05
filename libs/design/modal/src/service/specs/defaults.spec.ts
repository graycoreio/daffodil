import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
  flush,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DaffModalComponent } from '../../modal/modal.component';
import { DaffModalService } from '../modal.service';

@Component({
  selector: 'daff-dynamic-component',
  template: `
		<p>It works!</p>
	`,
})
class DynamicComponent {}

@Component({
  selector: 'daff-dynamic-component-two',
  template: `
		<p>It works!</p>
	`,
})
class DynamicTwoComponent {}

@Component({
  template: '',
})
class WrapperComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('@daffodil/design/modal | DaffModalService | Defaults', () => {
  let modalService: DaffModalService;
  let service: DaffModalService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicComponent,
        DynamicTwoComponent,
        DaffModalComponent,
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
    modalService = TestBed.inject(DaffModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should configure the modal to close when the backdrop is clicked', fakeAsync(() => {
    service.open(DynamicComponent);
    expect(overlayContainerElement.textContent).toContain('It works!');
    const backdrop = <HTMLElement>overlayContainerElement.querySelector(
      '.cdk-overlay-backdrop',
    );

    backdrop.click();
    fixture.detectChanges();
    tick(300);
    flush();

    expect(overlayContainerElement.textContent).not.toContain('It works!');
  }));
});
