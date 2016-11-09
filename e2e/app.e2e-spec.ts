import { Ng2SmokySaviorPage } from './app.po';

describe('ng2-smoky-savior App', function() {
  let page: Ng2SmokySaviorPage;

  beforeEach(() => {
    page = new Ng2SmokySaviorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
