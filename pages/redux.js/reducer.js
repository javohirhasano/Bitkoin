import { SIDEBAR } from "./type"

const initialState = {
    isSidebarshow: false,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR:
            return { ...state, isSidebarshow: !state.isSidebarshow }
        default: return state
    }
}
export default reducer