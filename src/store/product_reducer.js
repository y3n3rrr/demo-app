

export default (state={}, action) => {
    switch (action.type) {
        case "PRODUCTS":
            return { ...state, products: action.payload}
            break;
        default:
            return state
            break;
    }  
}