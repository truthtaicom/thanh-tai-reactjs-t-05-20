import { createStore } from 'redux'

const initState = {
  hoVaTen: "ABC",
  soTienDangCo: 200000
}

function Reducer1(state = initState, action) {
  if(action.type === "GUI_TIEN") {
    return {
      ...state,
      soTienDangCo: state.soTienDangCo + action.data
    }
  }

  if(action.type === 'RUT_TIEN') {
    return {
      ...state,
      soTienDangCo: state.soTienDangCo - action.data
    }
  }
}

const store = createStore(Reducer1, {})

export default store
