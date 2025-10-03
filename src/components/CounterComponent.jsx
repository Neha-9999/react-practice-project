import React, {useState} from "react";

const CounterComponent = () =>{

    const [count, setCount] = useState(10)
    const [value, setValue] = useState('neha')
    return (
        <div>
            <p>Counter component  - {count}</p>
            <p>{count % 2== 0 ? 'number is even' : 'number is odd'}</p>
          
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        
    )
}

export default CounterComponent