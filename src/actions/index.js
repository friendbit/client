
export function loginAttempt(user, password) {
  return {
    type: 'LOGIN_FAILED',
    user,
    message:'incorrect login'
  };
}
