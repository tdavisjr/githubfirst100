
const User = ({ user }) => {
  return (
    <div>
      <div className="col-md-1">
        <div className="center-block">
          <div>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img src={user.avatar_url} className="img-circle" alt={user.login} />
            </a>
          </div>
          <div>
            <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
