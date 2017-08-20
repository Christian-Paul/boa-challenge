import { combineReducers } from 'redux';
import user from './user';
import activeModal from './activeModal'

export default combineReducers({
	user,
	activeModal
})