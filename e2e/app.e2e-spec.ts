import { SiscebasViewPage } from './app.po';

describe('siscebas-view App', () => {
  let page: SiscebasViewPage;

  beforeEach(() => {
    page = new SiscebasViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
