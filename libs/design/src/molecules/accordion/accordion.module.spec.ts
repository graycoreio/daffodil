import { DaffAccordionModule } from './accordion.module';

describe('DaffAccordionModule', () => {
  let accordionModule: DaffAccordionModule;

  beforeEach(() => {
    accordionModule = new DaffAccordionModule();
  });

  it('should create an instance', () => {
    expect(accordionModule).toBeTruthy();
  });
});
