import Profile from '../../components/desktop/Profile'
import { connect } from 'react-redux'

export default connect(
  state => ({
    firstName: state.me.profile.firstName,
    lastName: state.me.profile.lastName
  }),
  dispatch => ({

  })
)(Profile)
