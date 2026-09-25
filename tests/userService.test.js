const { saveUser, getUsers } = require('../src/userService');

beforeEach(() => {
  require('../src/userService').clearUsers();
});

test('saves a user to the service', async () => {
  await saveUser({ name: 'Alice' });
  expect(getUsers().length).toBe(1);
});

test('getUsers returns an array', () => {
  expect(getUsers()).toBeInstanceOf(Array);
});
