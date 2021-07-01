import React, {Component} from 'react';
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import axios from "axios";
import './App.css';

class App extends Component {
    state = {
        users: [],
        isLoading: false
    }

    async componentDidMount() {
        this.setState({isLoading: true});
        const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data, isLoading: false});
    }

    render() {
        return (
            <div className="App">
                <NavBar title="Github Finder"/>
                <div className="container">
                    <Users isLoading={this.state.isLoading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
