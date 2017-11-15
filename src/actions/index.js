
export function loginFailed(user) {
  console.log("loginAttempt failed: " + user);
  return {
    type: 'LOGIN_FAILED',
    user,
    message: 'incorrect login'
  };
}

export function loginSuccess(userId) {
  console.log("successful login user: " + userId);
  return {
    type: 'LOGIN_SUCCESS',
    userId,
    message: null
  };
}

export function loginFbSuccess(loginFbResult) {
  console.log("successful Facebook login. Token " + loginFbResult);
  return {
    type: 'LOGIN_FB_SUCCESS',
    loginFbResult,
    message: null
  };
}

export function contactsLoaded(contacts){
  console.log('loaded contacts' );
  return {
    type:'PHONE_CONTACTS_LOADED',
    contacts
  }
}

