import React from 'react';
import '../App.css'

const Button = ({ changeActiveModal }) => (
	<button className='button' onClick={() => changeActiveModal('team')}>Edit Name</button>
)

export default Button;