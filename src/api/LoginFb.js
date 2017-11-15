import Expo from 'expo';
import { facebookConsts } from '../Constants';


export async function logInFb() {
    const loginFbResult = await Expo.Facebook.logInWithReadPermissionsAsync(facebookConsts.appId, {
        permissions: ['public_profile'],
    });
    if (loginFbResult.type === 'success') {
        console.log('Logged in!');
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${loginFbResult.token}`);
        console.log(`Hi ${(await response.json()).name}!`,
        );
        return loginFbResult;
    } else {
        var error = "Login falied. Type: " + loginFbResult.type;
        console.warn(error);
        throw error;
    }
}