import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }
    onClear = (e) => {
        e.preventDefault();
        this.props.clearUsers();
        this.setState({text: ''});
    }

    onChanged = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search ..." value={this.state.text}
                           onChange={this.onChanged}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear&&(<button className="btn btn-block btn-light" onClick={this.onClear}>Clear</button>)}
            </div>
        );
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }
}

export default Search;
