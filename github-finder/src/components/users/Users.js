import React, {useContext} from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/githubContext";

const Users = (props) => {
    const context = useContext(GithubContext);
    if (context.isLoading) return <Spinner/>
    return (
        <div style={userStyle}>
            {context.users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );

}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}
export default Users;