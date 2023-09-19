
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../../Redux/actions/index';


const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <div>Counter value: {count}</div>
            <button onClick={() => dispatch(allActions.counterAction.increment())}> Increment</button>
            <button onClick={() => dispatch(allActions.counterAction.decrement())}>Decrement</button>
        </div>
    )
}


export default Counter;