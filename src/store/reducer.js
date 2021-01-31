import { combineReducers } from 'redux-immutable';
import {reducer as header} from '../common/Header/store';

const reducer = combineReducers({
  header
})

export default reducer