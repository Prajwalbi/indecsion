// import React , {useState} from "react";


// const Toggle = () =>{
    
// let [isVisible, setVisibility ] = useState(false);
// let [btnName , setBtnName ] = useState("show details");
//     const toggleFunction = (event) =>{
//         if(isVisible){
//             setVisibility(false);
//             setBtnName("show details")
//         }
//         else{
//             setVisibility(true);
//             setBtnName("Hide details")
//         }
//         console.log("The value is " +event.target.value);
       
//     }
//     return (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={ toggleFunction }>{btnName}</button>

//              {isVisible && (<p>These is the precious details, Dont share with anyone</p>) }
            
//         </div>
//     );
     
// }

// export default Toggle;


import React from "react";
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            btnName: "Show details",
            isVisible: false
        }
    }

    handleClick(){
        this.setState(
            (prevState) =>{
                if(prevState.isVisible === false){
                    return{
                        isVisible: true,
                        btnName: "Hide details"
                    }
                }
                else{
                    return{
                        isVisible: false,
                        btnName: "Show details"
                    }
                }
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{ this.state.btnName }</button>
                { this.state.isVisible && <p>THis is precious details , Dont share with anyone buddy!</p>}
              
            </div>
        );
    }
}

export default Toggle;