
export function loginAttempt(user, password) {
  console.log("loginAttempt user: " + user);
  return {
    type: 'LOGIN_FAILED',
    user,
    message: 'incorrect login'
  };
}


