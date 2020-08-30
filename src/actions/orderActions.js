import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";

export const createOrder = (order) => (dispatch) => {
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())//convert response to json format
        .then((data) => {//data contains list of orders
            dispatch({ type: CREATE_ORDER, payload: data });
            localStorage.clear("cartItems");
            dispatch({ type: CLEAR_CART });
        });
};
export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
    fetch("/api/orders")
        .then((res) => res.json())//convert response to json format
        .then((data) => {//data contains list of orders
            dispatch({ type: FETCH_ORDERS, payload: data });
        });
};