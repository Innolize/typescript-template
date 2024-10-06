import { initApp } from '..';

describe('initApp', () => {
  it('Should call logger once', () => {
    const logger = jest.spyOn(console, 'log');

    initApp();

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Application started');
  });
});
