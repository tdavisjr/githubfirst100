import User from './User'


const UserList = ({ users }) => {
  return (
    <div>
      <div>
        {users.map(user => <User key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default UserList
