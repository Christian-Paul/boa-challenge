const defaultState = {
	name: 'Johnny Smith',
	address: '123 Bowl Lane New York, NY 10021',
	teams: []
}

const user = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_INFO':
			return state;
		default:
			return state;
	}
}

export default user