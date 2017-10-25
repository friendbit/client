
import { pingRequest } from './src/api/Ping';

it('api ping test works', () => {
  expect.assertions(1);
  return pingRequest().then(pingResponse => {
    // console.log("place 3" + pingResponse);
    expect(pingResponse.user).toEqual('anonymousUser');
  });
});
