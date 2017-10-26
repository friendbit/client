
import { pingRequest } from './src/api/Ping';
import { login } from './src/api/Login';

it('api ping test fails before login', () => {
  expect.assertions(1);
  return pingRequest().then(pingResponse => {
    // console.log("place 3" + pingResponse);
    expect(pingResponse.user).toEqual(undefined);
  });
});

it('failed login', () => {
  expect.assertions(1);
  return login("user", "bad").then(loginSuccess => {
    // console.log("place 3" + pingResponse);
    expect(loginSuccess).toEqual(false);
  });
});


it('correct login', () => {
  expect.assertions(1);
  return login("user", "password").then(loginSuccess => {
    // console.log("place 3" + pingResponse);
    expect(loginSuccess).toEqual(true);
  });
});

it('api ping test OK AFTER login', () => {
  expect.assertions(1);
  return pingRequest().then(pingResponse => {
    // console.log("place 3" + pingResponse);
    expect(pingResponse.user).toEqual('user');
  });
});