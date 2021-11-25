import React from "react";
import {useSelector, useDispatch, connect} from 'react-redux';
import {increment, decrement, signIn} from './actions';



function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>{isLogged ? "Log Out" : "Log In"}</button>
      {isLogged && <h3>Valuable information I shouldn't see</h3>}
    </div>
  );
}

function mapStateToProps(state){
  return {
    counter: state.counterReducer
  }
}

export default connect(mapStateToProps)(App);
