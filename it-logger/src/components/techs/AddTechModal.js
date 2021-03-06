import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'Please enter full name'});
        } else {
            console.log(firstName, lastName);
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <br/>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="lastName" className="active">Last Name</label>
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

export default AddTechModal;
