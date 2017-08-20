import React, { Component } from 'react';
import '../styles/Modal.css';

const closeIcon = 'M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM14.789 13.061l-1.729 1.729-3.060-3.061-3.061 3.060-1.729-1.729 3.062-3.060-3.061-3.061 1.729-1.728 3.060 3.060 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z'

class Modal extends Component {
	constructor(props) {
		super(props);

		let teams = [];

		for(let i = 0; i < 3; i++) {
			if(!props.user.teams[i]) {
				teams[i] = '';
			}
		}

		if(props.activeModal !== 'team') {
			this.state = {
				value: props.user[props.activeModal]
			}
		} else {
			this.state = {
				teams: teams
			}
		}


		this.modalTitle = this.modalTitle.bind(this);
		this.getFormattedName = this.getFormattedName.bind(this);
		this.addTeam = this.addTeam.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.thishandleTeamValueChange = this.handleTeamValueChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}
	modalTitle(activeModal, user) {
		return (activeModal !== 'team') ? (
			`Edit ${this.getFormattedName(activeModal)}`
		) : (
			(user.teams.length === 0) ? (
				'Add Teams'
			) : (
				'Update Teams'
			)
		)
	}
	getFormattedName(name) {
		return name[0].toUpperCase() + name.substr(1)
	}
	addTeam() {
		if(this.state.teams.length < 9) {
			this.setState((prevState) => {
				return {
					teams: [...prevState.teams, '']
				}
			})
		}
	}
	handleValueChange(event) {
		this.setState({
			value: event.target.value
		})
	}
	handleTeamValueChange(event, i) {
		let newVal = event.target.value;
		
		this.setState((prevState) => {
			console.log(newVal);
			return {
				teams: [...prevState.teams.slice(0, i), newVal, ...prevState.teams.slice(i+1)]
			}
		})
	}
	handleSave() {
		if(this.props.activeModal === 'team') {
			let teams = this.state.teams.filter((team) => {
				return team.length > 0;
			})
			this.props.updateUserTeams(teams);
		} else if(this.props.activeModal === 'name') {
			this.props.updateUserName(this.state.value);
		} else {
			this.props.updateUserAddress(this.state.value);
		}
		this.props.changeActiveModal(null);
	}
	render() {
		return (
			<div className='modal-background'>
				<div className='modal'>
					<h3 className='modal-title'>{this.modalTitle(this.props.activeModal, this.props.user)}</h3>
					{
						(this.props.activeModal !== 'team') ? (
							<div className='modal-input-row'>
								<label>
									{this.getFormattedName(this.props.activeModal)}
									<input name={this.props.activeModal} className='modal-input' type='text' onChange={this.handleValueChange} value={this.state.value}></input>
								</label>
							</div>
						) : (
							this.state.teams.map((team, i) => {
								return (
									<div key={i} className='modal-input-row'>
										<label>
											Team {i+1}
											<input className='modal-input' type='text' value={team} onChange={(event) => this.handleTeamValueChange(event, i)}></input>
										</label>
									</div>
								)
							})
						)
					}
					{this.props.activeModal === 'team' && <button className='add-team' onClick={this.addTeam}>+ Add Another</button>}
					<button className='modal-button modal-cancel' onClick={() => this.props.changeActiveModal(null)}>Cancel</button>
					<button className='modal-button modal-save' onClick={this.handleSave}>Save</button>
					<div className='modal-close' onClick={() => this.props.changeActiveModal(null)}>
						Close 
						<svg width='20' height='20' viewBox='0 0 20 20' className='close-icon'>
							<path d={closeIcon}></path>
						</svg>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal