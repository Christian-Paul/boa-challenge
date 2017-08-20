import React from 'react';
import SettingsRow from './SettingsRow.jsx';
import '../styles/Settings.css';

const Settings = (props) => (
	<div className='settings-holder'>
		<div className='settings'>
			<h1 className='settings-title'>Sports Magazine Settings</h1>
			<hr/>
			<SettingsRow info={props.user.name} title='Name' changeActiveModal={props.changeActiveModal}>
			</SettingsRow>
			<hr/>
			<SettingsRow info={props.user.address} title='Address' changeActiveModal={props.changeActiveModal}>
			</SettingsRow>
			<hr/>
			<SettingsRow info={props.user.teams} title='Favourite Teams' changeActiveModal={props.changeActiveModal}>
			</SettingsRow>
		</div>
	</div>
)

export default Settings