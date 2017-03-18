import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import main from './reducers/main';

export default combineReducers({
  main
});
