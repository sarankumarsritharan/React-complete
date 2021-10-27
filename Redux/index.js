const redux = require('redux');
const { logger } = require('redux-logger')


const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'Buy_ICECREAM'



function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}


//(prevState,action) => newState

// const initialState = {
//     numofCakes: 10,
//     numofIceCreams: 20
// }

const initialCakeState = {
    numofCakes: 10
}

const initialIceCreamState = {
    numofIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numofCakes: state.numofCakes - 1
//                     // always make a copy of state obj always and then change it because in real scenario state can hold many values
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numofIceCreams: state.numofIceCreams - 1
//             }



//         default:
//             return state
//     }

// }

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numofIceCreams: state.numofIceCreams - 1
            }
        default:
            return state
    }

}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numofCakes: state.numofCakes - 1
                    // always make a copy of state obj always and then change it because in real scenario state can hold many values
            }
        default:
            return state
    }

}


const rootReducer = combineReducer({
    cake: cakeReducer,
    IceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial State', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch((buyCake()))
store.dispatch((buyCake()))
store.dispatch((buyCake()))
store.dispatch((buyIceCream()))
store.dispatch((buyIceCream()))
store.dispatch((buyIceCream()))
unsubscribe()
    //buy cake is action