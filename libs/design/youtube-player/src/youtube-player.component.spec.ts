import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffYoutubePlayerComponent } from './youtube-player.component';

describe('DaffYoutubePlayerComponent', () => {
  let component: DaffYoutubePlayerComponent;
  let fixture: ComponentFixture<DaffYoutubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffYoutubePlayerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
