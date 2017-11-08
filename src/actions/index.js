
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

export function loginFbSuccess(token) {
  console.log("successful Facebook login. Token " + token);
  return {
    type: 'LOGIN_FB_SUCCESS',
    token,
    message: null
  };
}

