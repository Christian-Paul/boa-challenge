import { connect } from 'react-redux'
import Modal from '../components/Modal.jsx';
import { changeActiveModal } from '../actions';

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = {
	changeActiveModal
}

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)


export default ModalContainer