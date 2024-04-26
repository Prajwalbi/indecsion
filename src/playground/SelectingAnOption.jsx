import React , {useState} from "react";

const SelectionAnOption = () =>{
    
    let app = {
        tittle: "course",
        subtitle: "Brand new : Reactg course",
        option: []
      }
      
       const [inputRes, setInput] = useState(""); 
       const changeHandler = (event) =>{
        setInput(event.target.value);
       }
       let [count, setCounter] = useState(0);
       let [optionArray, setOption] = useState(app.option);
      
      const submitHandler = (event) =>{
          event.preventDefault();
          const res = event.target.elements.option.value;
          if(res){
            setInput("");
            console.log(res);
            let resArray = [inputRes, ...optionArray ]
              setOption([res, ...optionArray]);
              count = count + 1;
              setCounter(count);
              console.log(resArray);
      
              
            }
      } 
      
      const deleteArray = () => {
        setCounter(0);
        setOption([]);
      }

      const randomOption = () =>{
        const index = Math.floor(Math.random() * optionArray.length);
        alert("Lucy option is " + optionArray[index]);
      }
      
      
      
        return (
          <div>
            <button onClick={ deleteArray }>Remove all</button>
            <button disabled={optionArray.length === 0}  onClick={ randomOption }>Select a random option</button>
            <form onSubmit={ submitHandler }>
              <input type='text' name='option' style={{border: "1px solid black"}} value={inputRes} onChange={changeHandler}></input>
              <button >Add option</button>
             
              {/* <h1>{optionArray.length > 0 && "The array is " ,  {JSON.stringify(optionArray)}  }</h1> */}
              {/* <h1>{optionArray.length > 0 && ("The array is " + (optionArray).toString() )}</h1> */}
      
            </form>
            <h1>{count > 0 ? "Here are your options" : "No options"}</h1>
            <h1>{count}</h1>
            <ol>
            { optionArray.map(
             function(x){
             
              return <li key={Math.random()}>{x}</li>
             }
            )}
            </ol>
            
             {[<p>Hare Kridhna</p>, <p>Hare Rama</p>] }
          </div>
        );
}

export default SelectionAnOption;