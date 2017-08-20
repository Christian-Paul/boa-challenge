import reducer from '../reducers/user';

const defaultState = {
	name: 'Johnny Smith',
	address: '123 Bowl Lane New York, NY 10021',
	teams: []
}

const sampleName = 'John Doe';
const sampleAddr = '100 Liberty Avenue New York, NY 10021';
const sampleTeams = ['Maple Leafs', 'Sharks'];

describe('user reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(defaultState)
	})

	it('should handle UPDATE_NAME', () => {
		expect(reducer(undefined, {type: 'UPDATE_NAME', data: sampleName})).toEqual({
			...defaultState,
			name: sampleName
		})
	})

	it('should handle UPDATE_ADDRESS', () => {
		expect(reducer(undefined, {type: 'UPDATE_ADDRESS', data: sampleAddr})).toEqual({
			...defaultState,
			address: sampleAddr
		})
	})

	it('should handle UPDATE_TEAMS', () => {
		expect(reducer(undefined, {type: 'UPDATE_TEAMS', data: sampleTeams})).toEqual({
			...defaultState,
			teams: sampleTeams
		})
	})
})