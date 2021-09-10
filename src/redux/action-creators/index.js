export const addCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: item
        })
    }
}

export const removeCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: "removeFromCart",
            payload: item
        })
    }
}