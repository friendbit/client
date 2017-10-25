
import { pingRequest } from './src/api/Ping';

it('api ping test works', () => {
  console.log("aaa");
  expect.assertions(1);
  const pingResponse = pingRequest().then(pingResponse => {
    console.log(pingResponse);
    expect(pingResponse.user).toEqual('user');
  });
});
