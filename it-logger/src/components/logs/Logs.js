import React, {useEffect} from 'react';
import {connect} from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import {getLogs} from '../events/logEvents'

const Logs = (props) => {
    useEffect(() => {
        props.getLogs();
        //eslint-disable-next-line
    }, []);

    if (props.isLoading) return <Preloader/>
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!props.log.isLoading && props.log.logs.length === 0 ? (<p>No logs to show...</p>) :
                (props.log.logs.map((log) =>
                    <LogItem key={log.id} log={log}/>))}
        </ul>
    );
};
const mapStateToProps = (state) => {
    return {
        log: state.log
    }
}
export default connect(mapStateToProps, {getLogs})(Logs);
