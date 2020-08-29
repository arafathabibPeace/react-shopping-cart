import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;

//**createStore:
//creates a Redux store that holds the complete state tree of your app.
//There should only be a single store in your app.

//**applyMiddleware:
//Middleware is the suggested way to extend Redux with custom functionality.
//Middleware lets you wrap the store's dispatch method for fun and profit. 
//The key feature of middleware is that it is composable.
//Multiple middleware can be combined together,
//where each middleware requires no knowledge of what comes before or after it in the chain.

//redux-thunk lets the action creators invert control by dispatching functions.
//They would receive dispatch as an argument and may call it asynchronously.
//Such functions are called thunks. 

//Another example of middleware is redux-promise.
//It lets you dispatch a Promise async action,
//and dispatches a normal action when the Promise resolves.

//Middleware is not baked into createStore and is not a fundamental part of the Redux architecture,
//but we consider it useful enough to be supported right in the core.
//This way, there is a single standard way to extend dispatch in the ecosystem,
//and different middleware may compete in expressiveness and utility.

//**compose:
//Composes functions from right to left.
//This is a functional programming utility,
//and is included in Redux as a convenience.
//You might want to use it to apply several store enhancers in a row.

//Compose Arguments
//(arguments): The functions to compose.
//Each function is expected to accept a single parameter.
//Its return value will be provided as an argument to the function standing to the left, and so on.
//The exception is the right-most argument which can accept multiple parameters,
//as it will provide the signature for the resulting composed function.

//Compose Return
//(Function): The final function obtained by composing the given functions from right to left.

//**combineReducers:
//The combineReducers helper function turns an object
//whose values are different reducing functions into
//a single reducing function you can pass to createStore.

//The resulting reducer calls every child reducer,
//and gathers their results into a single state object.
//The state produced by combineReducers()
//namespaces the states of each reducer under
//their keys as passed to combineReducers()