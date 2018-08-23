import { StoriesModule } from './stories.module';

describe('StoriesModule', () => {
  let storiesModule: StoriesModule;

  beforeEach(() => {
    storiesModule = new StoriesModule();
  });

  it('should create an instance', () => {
    expect(storiesModule).toBeTruthy();
  });
});
