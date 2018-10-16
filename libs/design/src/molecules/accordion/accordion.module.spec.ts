import { AccordionModule } from './accordion.module';

describe('AccordionModule', () => {
  let accordionModule: AccordionModule;

  beforeEach(() => {
    accordionModule = new AccordionModule();
  });

  it('should create an instance', () => {
    expect(accordionModule).toBeTruthy();
  });
});
