import { combineReducers } from 'redux';
import sessionReducer from './sessions/session_reducer'
import entitiesReducer from './components/entities_reducer'
import errorsReducer from './errors/errors_reducer'
import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  ui: uiReducer,
})


export default rootReducer;