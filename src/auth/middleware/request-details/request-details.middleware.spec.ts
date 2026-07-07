import { RequestDetailsMiddleware } from './request-details.middleware';

describe('RequestDetailsMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestDetailsMiddleware()).toBeDefined();
  });
});
