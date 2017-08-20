import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ page }) => (
	<header className='header'>
		{ page }
	</header>
)

export default Navbar;