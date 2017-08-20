const activeModal = (state = null, action) => {
	switch (action.type) {
		case 'CHANGE_ACTIVE_MODAL':
			return action.value;
		default:
			return state;
	}
}

export default activeModal