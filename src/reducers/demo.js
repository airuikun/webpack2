import { fromJS } from 'immutable'
import * as actionType from '../actions/demo'

export default (state = fromJS(initState), action) => {
  switch(action.type) {
    case actionType.CHANGE_VALUE:
      return state.setIn(action.map, action.value)
    default:
      return state
    }
}
const initState = {
    conditions: {
	    userName: '',
	    userCode: ''
	}
}

