import { NgxSelectorPage } from './app.po';

describe('ngx-selector App', () => {
  let page: NgxSelectorPage;

  beforeEach(() => {
    page = new NgxSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
