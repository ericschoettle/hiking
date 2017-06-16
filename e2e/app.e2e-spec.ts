import { HikingPage } from './app.po';

describe('hiking App', () => {
  let page: HikingPage;

  beforeEach(() => {
    page = new HikingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
