import * as actions from '../actions';

describe('actions', () => {
	it('should create an action to change active modal', () => {
		const value = 'address';
		const expectedAction = {
			type: 'CHANGE_ACTIVE_MODAL',
			value
		}

		expect(actions.changeActiveModal(value)).toEqual(expectedAction);
	})
})

describe('actions', () => {
	it('should create an action to update user name', () => {
		const data = 'John Doe';
		const expectedAction = {
			type: 'UPDATE_NAME',
			data
		}

		expect(actions.updateUserName(data)).toEqual(expectedAction);
	})
})

describe('actions', () => {
	it('should create an action to update user address', () => {
		const data = '100 Liberty Avenue New York, NY 10021';
		const expectedAction = {
			type: 'UPDATE_ADDRESS',
			data
		}

		expect(actions.updateUserAddress(data)).toEqual(expectedAction);
	})
})

describe('actions', () => {
	it('should create an action to update user teams', () => {
		const data = ['Maple Leafs', 'Sharks'];
		const expectedAction = {
			type: 'UPDATE_TEAMS',
			data
		}

		expect(actions.updateUserTeams(data)).toEqual(expectedAction);
	})
})