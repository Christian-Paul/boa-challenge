import React from 'react';
import '../styles/Settings.css';

const NoTeams = () => (
	<div className='no-teams'>None Added</div>
)

const SettingsInfo = ({ info, title }) => (
	<div>
		<h4 className='settings-info-name'>{ title }</h4>
		<div className='settings-info-details'>
			{(title !== 'Favourite Teams') ? (
				<p className='settings-info-details-text'>{ info }</p>
			) : (
				(info.length > 0) ? (
					<ol className='team-list'>
						{info.map((team, i) => {
							return <li className='settings-info-details-text' key={i}>{team}</li>
						})}
					</ol>
				) : (
					<NoTeams />
				)
			)}
		</div>
	</div>
)

export default SettingsInfo