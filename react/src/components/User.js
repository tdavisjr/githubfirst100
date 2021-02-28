
const User = ({ data }) => {
  return (
    <div>
      <div className="col-md-1">
        <div className="center-block">
          <div>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              <img src={data.avatar_url} className="img-circle" alt={data.login} />
            </a>
          </div>
          <div>
            <a href={data.html_url} target="_blank" rel="noreferrer">{data.login}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
