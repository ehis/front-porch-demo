import { FrontPorchDemoPage } from './app.po';

describe('front-porch-demo App', function() {
  let page: FrontPorchDemoPage;

  beforeEach(() => {
    page = new FrontPorchDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
