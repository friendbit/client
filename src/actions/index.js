
export function loginAttempt(user, password) {
  console.log("loginAttempt user: " + user);
  return {
    type: 'LOGIN_FAILED',
    user,
    message: 'incorrect login'
  };
}

export function userIdChanged(newUserId) {
  return {
    type: 'USER_ID_CHANGED',
    newUserId
  }
}
