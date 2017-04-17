import { ProjetoViewPage } from './app.po';
import {promise} from 'selenium-webdriver';
import Promise = promise.Promise;
import Expected = jasmine.Expected;

describe('projeto-view App', () => {
  let page: ProjetoViewPage;

  beforeEach(() => {
    page = new ProjetoViewPage();
  });

  it('should be called', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toHaveBeenCalled();
  });
});
