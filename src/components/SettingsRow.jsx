import React from 'react';
import Button from './Button.jsx';
import SettingsInfo from './SettingsInfo.jsx';
import '../styles/Settings.css';

const SettingsRow = ({ info, changeActiveModal, title }) => (
	<div className='settings-row'>
		<SettingsInfo info={ info } title={ title } />
		<Button changeActiveModal={ changeActiveModal } title={ title } info={ info }/>
	</div>
)

export default SettingsRow