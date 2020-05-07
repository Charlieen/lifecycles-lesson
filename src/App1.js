import React,{useState, useCallback, useMemo } from 'react';

const functions = new Set();
const functions2 = new Set();
const f1= ()=>{console.log('hello')};

/**
 * 充分证明：函数 也是对象，对象的 reference 是 地址中的值。
 * 
 * The only thing about use memo is that you actually use it when you want to cache the value of a function;
 */

 /**
  * 
  */

const App1 = ()=>{


    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const incrementCount1 = useCallback(()=> setCount1(count1 +1),[count1]);
    const incrementCount2 = useCallback(()=> setCount2(count2 +1),[count2]);

    const doSomethingComplicated = useMemo(()=>{
        console.log('I am computing something complex');
        return ((count1 *1000) % 12.4) * 51000 -4000;
    },[count1]);


    const logName =()=> console.log('ZhiGang');

    const logName2=  useCallback(()=>console.log('ZhiGang'),[]);

    functions.add(logName2);
    functions.add(incrementCount1);
    functions.add(incrementCount2);

    // functions.add(f1);
    // functions2.add(logName2);
    console.log('1- ',functions);
   // console.log('2- ',functions2);



    return (
        <div>
        Count1: {count1}
        <button onClick={incrementCount1}>incrementCount1</button>

        Count2: {count2}
        <button onClick={incrementCount2}>incrementCount2</button>
        ComplexValue is : {doSomethingComplicated}
        <button onClick={logName}>Log Name</button>
        </div>
    );

}

export default App1;