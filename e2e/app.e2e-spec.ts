import { GitlabCiAppPage } from './app.po';

describe('gitlab-ci-app App', () => {
  let page: GitlabCiAppPage;

  beforeEach(() => {
    page = new GitlabCiAppPage();
  });

  it('check title is shown properly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('What is essential is invisible to the eye');
  });
});
