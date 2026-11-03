function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const trackLoginAttempts = (passwordAttempt) => {
    attemptCount += 1;

    if (passwordAttempt === userInfo.password) {
      if (attemptCount <= 3) {
        return 'Login successful';
      }
      return 'Account locked due to too many failed login attempts';
    }

    if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }

    return 'Account locked due to too many failed login attempts';
  };

  return trackLoginAttempts;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};