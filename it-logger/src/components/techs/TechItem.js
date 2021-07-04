import React from 'react';

const TechItem = (props) => {
    return (
        <li className="collection-item">
            <div>{props.tech.firstName} {props.tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>

        </li>
    );
}

export default TechItem;
