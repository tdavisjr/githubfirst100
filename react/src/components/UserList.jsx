import User from './User'


const UserList = ({ users }) => {
  return (
    <div>
      <div>
        {users.map(user => <User key={user.id} data={user} />)}
      </div>
    </div>
  )
}

export default UserList
