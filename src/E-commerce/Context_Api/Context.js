import { createContext, useReducer, useEffect } from "react";
export const CartContext = createContext();
export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                // test pour les donner ne repet pas 
                const temps = state.filter((item) => action.payload.id === item.id)
                if (temps.length > 0) {
                    return state
                }
                else {
                    return [...state, action.payload]

                }
            case 'increase':
                const temps1 = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {

                        return item;
                    }
                })
                return temps1
            case 'dencrease':
                const temps2 = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {

                        return item;
                    }
                })
                return temps2
            case 'remove':
                const temps3 = state.filter((item) => item.id !== action.payload.id)
                return temps3;
            case 'deletall':
                return []
            default:
                return state
        }
    }
    function getQuantity(productId) {
        const item = state.find((item) => item.id === productId);
        return item ? item.quantity : 0;
    }
    const [state, dispatch] = useReducer(reducer, [])
    const info = { state, dispatch, getQuantity }
    return <CartContext.Provider value={info}>
        {props.children}
    </CartContext.Provider>
}