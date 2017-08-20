const defaultState = {
	name: 'Johnny Smith',
	address: '123 Bowl Lane New York, NY 10021',
	teams: []
}

const user = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_NAME':
			return {...state, name: action.data};
		case 'UPDATE_ADDRESS':
			return {...state, address: action.data};
		case 'UPDATE_TEAMS':
			return {...state, teams: action.data};
		default:
			return state;
	}
}

export default user