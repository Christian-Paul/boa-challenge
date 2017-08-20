import React from 'react';
import ReactDOM from 'react-dom';
import SettingsRow from '../components/SettingsRow';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SettingsRow />, div);
})