import React from "react";
import { RiSearchLine } from 'react-icons/ri';
import Modal from './Modal';
import './modal.css';


class ModalSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className="modalbtn">
                <Modal show={this.state.show} handleClose={this.hideModal}>
                </Modal>
                <button type='button' onClick={this.showModal} className="searchbtn">
                    <p className="btntext">
                        <RiSearchLine /> Search
                    </p>
                </button>
                <button type="button" className="hdsearchbtn" onClick={this.showModal}>
                    <RiSearchLine />
                </button>
            </div>
        )
    }
}

export default ModalSearch;