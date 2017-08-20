import React from 'react';
import Button from './Button.jsx';
import SettingsInfo from './SettingsInfo.jsx';
import '../styles/Settings.css';

const SettingsRow = (props) => (
	<div className='settings-row'>
		<SettingsInfo user={props.user}/>
		<Button changeActiveModal={props.changeActiveModal}/>
	</div>
)

export default SettingsRow