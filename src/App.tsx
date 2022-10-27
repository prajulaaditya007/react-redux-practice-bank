import React from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useSelector} from "react-redux";
import {actionCreators, RootState} from './state';



function App() {

    const state = useSelector((state: RootState) => state.bank)
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
    return (
        <div
            style={{
              textAlign: 'center',
              display:'flex',
              flexDirection:'column',
              gap:'1rem',
              border:'1px solid black',
              padding:"1rem",
              marginLeft:'25rem',
              marginRight:'25rem'
        }}>
          <h1 style={{border:'1px solid black'}}>{state}</h1>
          <button style={{background:'pink', height:'30px'}} onClick={()=>depositMoney(1000)}>Deposit</button>
          <button style={{background:'yellowgreen', height:'30px'}} onClick={()=>withdrawMoney(500)}>Withdraw</button>
          <button style={{background:'aquamarine', height:'30px'}} onClick={()=>bankrupt()}>Bankrupt</button>
        </div>
    )
}

export default App;
