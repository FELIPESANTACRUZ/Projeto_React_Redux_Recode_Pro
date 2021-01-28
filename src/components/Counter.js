import React from 'react';
// import {connect } from 'react-redux'; //teste usando o connect
import { actions } from '../actions/counter';
import { useDispatch, useSelector } from 'react-redux';  //ao invés de connect preferi usar os hooks
import { selectors } from '../selectors/counter'

const Counter = () => {
    const counter = useSelector(selectors.getCounter)
    const dispatch = useDispatch()

    const handleDecrement = () => dispatch(actions.decrement())
    const handleIncrement = () => dispatch(actions.increment())
    return (
    <>
<h1>Counter: { counter }</h1>
<ul>
    <li><button onClick={handleDecrement}>Decrement</button></li>
    <li><button onClick={handleIncrement}>Increment</button></li>
</ul>
    </>
)
}
//######################
//Testando Usando o Connect 
// const mapStateToProps = state => ({
//     counter: state.counterReducers.counter
// })

// const mapDispatchToProps = dispatch => ({
//     decrement: () => dispatch(actions.decrement()),
//     increment: () => dispatch(actions.increment())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//######################

export default Counter