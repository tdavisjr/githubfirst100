class User extends React.Component {
    render() {
        return (
            <div className="col-md-1">
                <div className="center-block">
                    <div>
                        <a href={this.props.data.html_url} target="_blank">
                            <img src={this.props.data.avatar_url} className="img-circle"/>
                        </a>
                    </div>
                    <div>
                        <a href={this.props.data.html_url} target="_blank">{this.props.data.login}</a>
                    </div>        
                </div>
            </div>
        );
        
    }
}



class UserList extends React.Component {
    render() {
        return (
            <div>
            {this.props.users.map(user => <User key={user.login} data={user} />)}
            </div>
        );
        
    }
}



class Loader extends React.Component {
    render() {
        return (
            <div className={this.props.isLoading ? "" : "hidden" + " row"}>
                <div className="col-md-2 col-md-offset-5 well well-lg bg-info">
                    <span className="glyphicon glyphicon-refresh"></span>
                    Loading...
                </div>
            </div>           
        );
    }
}



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: [], loaded: false};
    }
    componentWillMount(){
        this._fetchUsers();
    }  
    
    _fetchUsers(){       
        window.fetch('https://api.github.com/users')
            .then(function(response) {
                return response.json()
            })
            .then((data) => {
                this.setState({users: data, loaded: true});
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            });             
    }
      
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>GitHub First 100</h1>
                </div>   
                <Loader isLoading={ !this.state.loaded }/>  
                <UserList users={this.state.users} />
            </div>     
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));