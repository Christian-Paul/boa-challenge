import React from 'react';
import Button from './Button.jsx';
import SettingsInfo from './SettingsInfo.jsx';
import '../styles/Settings.css';

const SettingsRow = () => (
	<div className='settings-row'>
		<SettingsInfo />
		<Button/>
	</div>
)

export default SettingsRow