import Profile from '../../components/desktop/Profile'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export default connect(
  state => ({
    firstName: state.profile.profile.firstName,
    lastName: state.profile.profile.lastName,
  }),
  dispatch => ({
    onChangeFirstName: value => dispatch(actions.change(`firstName`, value)),
    onChangeLastName: value => dispatch(actions.change(`lastName`, value))
  }),
)(Profile)
