import React from 'react';
import '../App.css'

const buttonText = (title, info) => (title !== 'Favourite Teams') ? (
	`Edit ${title}`
) : (
	(info.length === 0) ? (
		'Add Teams'
	) : (
		'Update Teams'
	)
)

const modal = (title) => (title !== 'Favourite Teams') ? (
	title.toLowerCase()
) : (
	'team'
)

const Button = ({ changeActiveModal, title, info }) => (
	<button className='button' onClick={() => changeActiveModal(modal(title))}>
		{buttonText(title, info)}
	</button>
)

export default Button;