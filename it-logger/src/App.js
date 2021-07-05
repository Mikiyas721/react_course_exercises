import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddBotton";
import AddLogModal from "./components/logs/AddLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import EditLogModal from "./components/logs/EditLogModal";
import TechListModal from "./components/techs/TechListModal";
import {Provider} from "react-redux";
import store from "./store";

const App = ()=> {

    useEffect(() => {
        M.AutoInit();
    });

    return (
        <Provider store={store}>
            <Fragment>
                <SearchBar/>
                <div className="container">
                    <AddButton/>
                    <AddLogModal/>
                    <EditLogModal/>
                    <AddTechModal/>
                    <TechListModal/>
                    <Logs/>
                </div>
            </Fragment>
        </Provider>

    );
}

export default App;
