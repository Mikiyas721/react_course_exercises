import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";

class User extends Component {

    async componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            login,
            id,
            node_id,
            avatar_url,
            html_url,
            name,
            company,
            blog,
            location,
            email,
            hireable,
            bio,
            twitter_username,
            public_repos,
            public_gists,
            followers,
            following,
            created_at,
            updated_at
        } = this.props.user;
        if (this.props.isLoading) return <Spinner/>
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back To Search</Link>
                {hireable ?
                    <text className="alert-success">Hireable</text>
                    : <text className="alert-danger">Not Hirable</text>
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img
                            src={avatar_url}
                            alt=""
                            className="round-img"
                            style={{width: '150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                {login && (<Fragment>
                                    <strong>UserName: </strong>{login}
                                </Fragment>)}
                            </li>
                            <li>
                                {company && (<Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>)}
                            </li>
                            <li>
                                {blog && (<Fragment>
                                    <strong>Blog: </strong><a href={blog}>{blog}</a>
                                </Fragment>)}
                            </li>
                        </ul>
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>)}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
            </Fragment>
        );
    }
}

export default User;
