import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserMenu from '../navbar/board_nav/user_menu';
import BoardForm from '../boards/board_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'user-options':
      component = <UserMenu />
      break;
    case 'create-board':
      component = <BoardForm />
      break;
    default:
      return null;
  }

  return (
    <div className={`modal-background`} onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(msp, mdp)(Modal);