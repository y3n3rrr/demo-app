
export default (state, action) => {
    switch (action.type) {
        case "USERS":
            return { ...state, payload: action.payload}
            break;
        default:
            return state
            break;
    }  
}