const addItem = product => {
    return{
        type: "ADD_ITEM",
        payload:product

    }
} 
const removeItem = product => {
    return{
        type: "REMOVE_ITEMS",
        payload:product

    }
} 
const increase = product => {
    return{
        type: "INCREASE",
        payload:product

    }
} 
const decrease = product => {
    return{
        type: "DECREASE",
        payload:product

    }
}
const checkout = () => {
    return{
        type: "CHECKOUT",
        
    }
} 
const clear = () => {
    return{
        type: "CLEARE",
        
    }
} 
export {checkout, clear, removeItem, addItem, increase, decrease};