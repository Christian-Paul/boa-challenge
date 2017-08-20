import React from 'react';
import '../styles/Modal.css';

const closeIcon = 'M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM14.789 13.061l-1.729 1.729-3.060-3.061-3.061 3.060-1.729-1.729 3.062-3.060-3.061-3.061 1.729-1.728 3.060 3.060 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z'

const Modal = () => (
	<div className='modal-background'>
		<div className='modal'>
			<h3 className='modal-title'>Add Teams</h3>
			<div className='modal-input-row'>
				Name <input className='modal-input' type='text'></input>
			</div>
			<button className='modal-button modal-cancel'>Cancel</button>
			<button className='modal-button modal-save'>Save</button>
			<button className='add-team'>+ Add Another</button>
			<div className='modal-close'>
				Close 
				<svg width='20' height='20' viewBox='0 0 20 20' className='close-icon'>
					<path d={closeIcon}></path>
				</svg>
			</div>
		</div>
	</div>
)

export default Modal