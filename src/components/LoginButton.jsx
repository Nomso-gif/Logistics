import React from 'react'

const LoginButton = ({isLoggedIn, onLoginToggle}) => {
  return (
    <div>
        <button onClick={onLoginToggle}
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4 w-full'>
{isLoggedIn ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}

export default LoginButton