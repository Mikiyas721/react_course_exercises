import React, {useState, useContext} from 'react';
import GithubContext from "../../context/githubContext";

const Search = (props) => {
    const context = useContext(GithubContext);
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        context.searchUsers(text);
        setText('');
    }
    const onClear = (e) => {
        e.preventDefault();
        context.clearUsers();
        setText('');
    }

    const onChanged = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search ..." value={text}
                       onChange={onChanged}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {context.users.length > 0 && (
                <button className="btn btn-block btn-light" onClick={onClear}>Clear</button>)}
        </div>
    );


}
export default Search;
