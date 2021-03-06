import { connect } from 'react-redux'
import App from '../App.js';

const mapStateToProps = (state) => ({
	activeModal: state.activeModal
})

const AppContainer = connect(
  mapStateToProps
)(App)


export default AppContainer