import { Ang4cliSocketioStarterPage } from './app.po';

describe('ang4cli-socketio-starter App', () => {
  let page: Ang4cliSocketioStarterPage;

  beforeEach(() => {
    page = new Ang4cliSocketioStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
