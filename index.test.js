const hash = require('./index.js');

it('returns correct value for string test', () => {
  expect(hash('test')).toEqual(3127628307);
});

it('returns correct value for string hello-world', () => {
  expect(hash('hello-world')).toEqual(3142825913);
});
