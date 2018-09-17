import { FooterModule } from './footer.module';

describe('FooterModule', () => {
  let footerModule: FooterModule;

  beforeEach(() => {
    footerModule = new FooterModule();
  });

  it('should create an instance', () => {
    expect(footerModule).toBeTruthy();
  });
});
