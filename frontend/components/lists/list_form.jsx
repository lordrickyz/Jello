import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { createList } from '../../actions/list_actions';


const msp = (state, ownProps) => {
  return {
    
  }
}

const mdp = dispatch => {
  return {
    createList: (list) => dispatch(createList(list)),
  }
}

class ListForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return {

    }
  }
}

export default withRouter(connect(msp, mdp)(ListForm))