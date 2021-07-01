import React from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';

const Users = (props) => {
    if (props.isLoading) return <Spinner/>
    return (
        <div style={userStyle}>
            {props.users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );

}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}
export default Users;