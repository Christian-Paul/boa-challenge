import { connect } from 'react-redux'
import Modal from '../components/Modal.jsx';
import { changeActiveModal, updateUserName, updateUserAddress, updateUserTeams } from '../actions';

const mapStateToProps = (state) => ({
	user: state.user,
	activeModal: state.activeModal
})

const mapDispatchToProps = {
	changeActiveModal,
	updateUserName,
	updateUserAddress,
	updateUserTeams
}

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)


export default ModalContainer