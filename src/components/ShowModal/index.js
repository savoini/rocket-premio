import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import { connect } from 'react-redux';
import './styles.css';

Modal.setAppElement(document.getElementById('root'));

function ShowModal({ modal }) {
  return (
    <Modal
      isOpen={modal.open}
      contentLabel="Loading"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <h2>Loading...</h2>
    </Modal>
  );
}

ShowModal.propTypes = {
  modal: PropTypes.shape({
    open: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(ShowModal);
