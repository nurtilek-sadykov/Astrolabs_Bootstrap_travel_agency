import { useState } from "react";

const CounterButton = () => {
    const [ state, setState ] = useState(0);
    function counter(){
        
        setState(state+1);
    }
    //var label = state;
    return(
        <button onClick={counter} className="btn btn-primary">{state}</button>
    )
}

export default CounterButton;

