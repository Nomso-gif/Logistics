import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserProfile = ({user='Nomso'}) => {
  return (
    <div className='border w-[30%] mt-2 p-2 rounded'>
        <h2>This is the user's profile info</h2>
        <p>Hello i am <b>{user}</b> <FontAwesomeIcon icon={faUser} /></p>
    </div>
  )
}

export default UserProfile