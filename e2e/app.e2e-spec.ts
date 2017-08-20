import { AngularCliExamplePage } from './app.po';

describe('angular-cli-example App', () => {
  let page: AngularCliExamplePage;

  beforeEach(() => {
    page = new AngularCliExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
