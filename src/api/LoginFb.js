import Expo from 'expo';
import { facebookConsts } from '../Constants';


export async function logInFb() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(facebookConsts.appId, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      console.log(
        'Logged in!' +
        `Hi ${(await response.json()).name}!`,
      );
    }
  }