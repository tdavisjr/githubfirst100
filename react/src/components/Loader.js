
const Loader = ({ loading }) => {
  return (
    <div className={loading ? "" : "hidden row"}>
      <div className="col-md-2 col-md-offset-5 well well-lg bg-info">
        <span className="glyphicon glyphicon-refresh"></span>
          Loading...
      </div>
    </div>
  )
}

export default Loader
