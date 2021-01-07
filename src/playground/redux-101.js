import { createStore } from 'redux';

// Action generations - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decremendCount = ({ decrementBy = 1 }= {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = ({  count = 0  } = {}) => ({
    type: 'RESET',
    count
});

//Reducers
//1. Reducers are pure functions
//2.Never change state or action


const countReduser = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
                case 'SET':
                    return {
                        count: action.count
                    };
                case 'RESET':
                return {
                    count: 0
                };
        default:
            return state;
    }
};


const store = createStore(countReduser);

const unSubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy:5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount({ count: 0 }));

store.dispatch(decremendCount());

store.dispatch(decremendCount({ decrementBy:10 }));
 
store.dispatch(setCount({ count:-105 }));
