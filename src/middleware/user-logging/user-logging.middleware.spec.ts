import { UserLoggingMiddleware } from './user-logging.middleware';

describe('UserLoggingMiddleware', () => {
  it('should be defined', () => {
    expect(new UserLoggingMiddleware()).toBeDefined();
  });
});
