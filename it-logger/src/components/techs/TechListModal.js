import React, {useState, useEffect} from 'react';
import TechItem from "./TechItem";
import Preloader from "../layout/Preloader";

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setIsLoading(true);

        const rawData = await fetch('/techs');
        const response = await rawData.json();

        setTechs(response);
        setIsLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">{!isLoading && techs.map(tech => {
                    return (<TechItem key={tech.id} tech={tech}/>)
                })}</ul>
            </div>
        </div>
    );
}

export default TechListModal;
