import { connect } from 'react-redux'
import Settings from '../components/Settings.jsx';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)


export default SettingsContainer