import {
  Component,
  signal,
} from '@angular/core';
import {
  ComponentFixture,
  DeferBlockBehavior,
  DeferBlockFixture,
  DeferBlockState,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffRovingTabIndexBoundaryDirective } from './roving-tab-index-boundary.directive';
import { DaffRovingTabIndexDirective } from './roving-tab-index.directive';

@Component({
  template: `
		<div class="boundary" [rtiBoundary]="groupValue()">
			@defer (hydrate on interaction) {
				<div class="child" rti></div>
			}
		</div>
	`,
  imports: [
    DaffRovingTabIndexBoundaryDirective,
    DaffRovingTabIndexDirective,
  ],
})
class WrapperComponent {
  groupValue = signal('group');
}

describe('@daffodil/design/core | Roving Tab Index | Incremental Hydration', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let deferBlockFixture: DeferBlockFixture;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    });

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    deferBlockFixture = (await fixture.getDeferBlocks())[0];
  });

  // not functional as a mocked test, needs e2e to properly test
  xit('should update the child to match the parent after deferred hydration', async () => {
    await deferBlockFixture.render(DeferBlockState.Complete);

    wrapper.groupValue.set('updated-group');
    await fixture.whenStable();

    const child = fixture.debugElement.query(By.css('.child'));

    expect(child.attributes['data-rti']).toEqual('updated-group');
  });
});
