import { connect } from 'react-redux'
import Settings from '../components/Settings.jsx';
import { changeActiveModal } from '../actions';

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = {
	changeActiveModal
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)


export default SettingsContainer