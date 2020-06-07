import { combineReducers } from 'redux';
import sessionReducer from './sessions/session_reducer'
import entitiesReducer from './components/entities_reducer'
import errorsReducer from './errors/errors_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer
})


export default rootReducer;