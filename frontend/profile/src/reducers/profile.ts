import { createReducer } from '@utils/reducer'
import * as actions from '../constants/profile'

interface State {
  firstName: string,
  lastName: string
}

const initialState: State = {
  firstName: `Дуглас`,
  lastName: `Крокфорд`
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value
  })
})
