import React,{useState} from "react";
function Counter(){
    const [count,setCount] = useState(0);
    // Function to increment the count
    const handleClick=()=>{
        setCount(prev => prev +1);
    };

    return(
        <div>
            <h3>Coount: {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Counter;