import { RafPage } from './app.po';

describe('raf App', () => {
  let page: RafPage;

  beforeEach(() => {
    page = new RafPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
