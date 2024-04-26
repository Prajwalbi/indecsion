import React from "react";
import ReactModal from 'react-modal';
import Modal from 'react-modal';

const OptionModal = (props) =>{


     // Set the app element for React Modal
     Modal.setAppElement('#root');
    return (
        // <ReactModal
        <Modal

        isOpen={  !!props.selectedOption }
        contentLabel="Selected Option"
        onRequestClose={ props.closeModal }
        closeTimeoutMS={4000}
        className="modal"

        >
              <h3 className="modal__title">Selected option</h3>
            { props.modalContent && <p className="modal__body">{props.modalContent}</p>}
            <button className="button" onClick={ props.closeModal }>Close Modal</button>

        {/* </ReactModal> */}
        </Modal>
    ); 
}

export default OptionModal;