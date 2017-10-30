
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


