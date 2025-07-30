import React from 'react'

const LoginGreeting = ({ isLoggedIn, username }) => {
  return (
    <div className='text-xl font-bold'>
      {isLoggedIn ? (
        <h2>Welcome, {username || "user"}!</h2>
      ) : (
        <h2>Hello {username || "Guest"}, Please Login!</h2>
      )}
    </div>
  );
};

export default LoginGreeting;
