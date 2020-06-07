import { combineReducers } from 'redux';
import usersReducer from '../users/users_reducer';
import boardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  boards: boardsReducer
})

export default entitiesReducer;

