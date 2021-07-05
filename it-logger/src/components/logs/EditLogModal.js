import React, {useState, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from "react-redux";
import {updateLog} from "../events/logEvents";

const EditLogModal = (props) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (props.current) { //Error: Not getting called
            setMessage(props.current.message);
            setAttention(props.current.attention);
            setTech(props.current.tech);
        }
    }, []);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please fill all the forms'});
        } else {
            const updatedLog = {
                id: props.current.id,
                message: props.current.message,
                attention: props.current.attention,
                tech: props.current.tech,
                date: new Date(),
            }
            updateLog(updatedLog);
            M.toast({html: `Log updated by ${this.props.tech}`})
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <label>
                            <input
                                type="checkbox"
                                className="filled-in"
                                checked={attention}
                                value={attention}
                                onChange={e => {
                                    setAttention(!attention)
                                }}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn blue">
                    Enter
                </a>
            </div>

        </div>
    );
}
const modalStyle = {
    width: '75%',
    height: '75%'
}
const mapStateToProps = (state) => ({
    current: state.log.current
});
export default connect(mapStateToProps, {updateLog})(EditLogModal);
