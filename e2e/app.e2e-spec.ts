import { GitlabCiAppPage } from './app.po';

describe('gitlab-ci-app App', () => {
  let page: GitlabCiAppPage;

  beforeEach(() => {
    page = new GitlabCiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
