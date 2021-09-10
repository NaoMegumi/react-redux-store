const cartReducer = (state = {itemCount: 0, items: [], cartTotal: 0}, action) => {
    switch (action.type) {
        case "addToCart":
            let stateCopy = state;
            stateCopy.itemCount += action.payload.quantity;
            let indexValue = -1;
            for(let i = 0; i < stateCopy.items.length; i++) {
                if (stateCopy.items[i].item === action.payload.itemName) {
                    indexValue = i;
                    break;
                }
            }
            if (indexValue >= 0) {
                stateCopy.items[indexValue].quantity += action.payload.quantity;
            } else {
                stateCopy.items.push({"item": action.payload.itemName, 
                 "quantity": action.payload.quantity, "price": action.payload.price});
            }
            stateCopy.cartTotal += action.payload.price * action.payload.quantity;
            return stateCopy;
        case "removeFromCart":
            return state;
        default:
            return state;
    }
}

export default cartReducer;