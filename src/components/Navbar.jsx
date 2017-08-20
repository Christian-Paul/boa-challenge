import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ page }) => (
	<header className='header-holder'>
		<div className='header'>
			<h1 className='page-name'>
				{ page }
			</h1>
		</div>
	</header>
)

export default Navbar;