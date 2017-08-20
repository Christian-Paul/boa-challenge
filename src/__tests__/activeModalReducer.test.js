import reducer from '../reducers/activeModal';

describe('active modal reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(null)
	})

	it('should handle CHANGE_ACTIVE_MODAL', () => {
		expect(reducer(undefined, {type: 'CHANGE_ACTIVE_MODAL', value: 'address'})).toEqual('address')
	})
})