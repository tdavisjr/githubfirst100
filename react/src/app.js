class User extends React.Component {
    render() {
        return (
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
        );
        
    }
}



class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    componentDidMount(){

    }
    render() {
        
        const users = 
        [
            {
                login: "mojombo", 
                html_url: "https://github.com/mojombo", 
                avatar_url:"https://avatars.githubusercontent.com/u/1?v=3"
            }
            
        ];
        
        return (
            <div>
            {users.map(user => <User key={user.login} data={user} />)}
            </div>
        );
        
    }
}



class Loader extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2 col-md-offset-5 well well-lg bg-info">
                    <span className="glyphicon glyphicon-refresh"></span>
                    Loading...
                </div>
            </div>           
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>GitHub First 100</h1>
                </div>   
                <Loader />  
                <UserList />
            </div>     
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));