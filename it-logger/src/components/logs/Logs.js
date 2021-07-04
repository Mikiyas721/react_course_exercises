import React, {useState, useEffect} from 'react';
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = ()=> {
    const [logs, setLogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setIsLoading(true);

        const rawData = await fetch('/logs');
        const response = await rawData.json();

        setLogs(response);
        setIsLoading(false);
    }

    if (isLoading) return <Preloader/>
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!isLoading && logs.length === 0 ? (<p>No logs to show...</p>) :
                (logs.map((log) =>
                    <LogItem key={log.id} log={log}/>))}
        </ul>
    );
}

export default Logs;
