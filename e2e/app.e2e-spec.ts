import { Ng2Seed201802Page } from './app.po';

describe('ng2-seed201802 App', function() {
  let page: Ng2Seed201802Page;

  beforeEach(() => {
    page = new Ng2Seed201802Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
