import React from 'react';
import SettingsRow from './SettingsRow.jsx';
import '../styles/Settings.css';

const Settings = (props) => (
	<div className='settings-holder'>
		<div className='settings'>
			<h1 className='settings-title'>Sports Magazine Settings</h1>
			<hr/>
			<SettingsRow {...props}>
			</SettingsRow>
			<hr/>
			<SettingsRow {...props}>
			</SettingsRow>
			<hr/>
			<SettingsRow {...props}>
			</SettingsRow>
		</div>
	</div>
)

export default Settings