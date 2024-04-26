// import React from "react";

// class Header extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handleAddOption1 = this.handleAddOption1.bind(this);
//         this.state = {
//             options : ["thingONe", "ThingTwo", "ThiongThree"]
//         }
//     }
//     handleDeleteOptions(){
//         this.setState(
//             () => {
//                 return { options: [] }
//             }
//         );
//     }
//     handleAddOption1(option){
//         if(!option){
//             return "Enter valid option";
//         }else if(this.state.options.indexOf(option) > -1){
//             return "This option is alrady present";
//         }
//       this.setState(
//         (prevState) =>{
//             return prevState.options.push(option);
//         }
//       );
//     }
//     render() {
//         const title = "Indecision";
//         const subtitle = "Catch up baby";
      
//       return (
//         <div>
//           <Navbar title={title} subtitle={subtitle} />
//           {/* {(this.state.options) ? <Action />} */}
//           <Action hasOption={this.state.options.length > 0} options = {this.state.options} />
//           <Options options={this.state.options}  handleDeleteOptions = {this.handleDeleteOptions}/>
//           <AddOption handleAddOption1={ this.handleAddOption1 }/>
//           <Counter />
//         </div>
//       );
//     }
//   }
// class Navbar extends React.Component{
//     render(){
//         return (<div>
//              <h1>{this.props.title}</h1>
//              <h2>{this.props.subtitle}</h2>
//         </div>);
//     }
// }


// class Action extends React.Component{
//     constructor(props){
//         super(props);
//         this.randomOption = this.randomOption.bind(this);
//     }
//     handlePick() {
//         alert("handlePick clicked");
//     }
//     randomOption(){
//         const res = Math.floor(Math.random() * this.props.options.length);
//         console.log(res);
//         alert(this.props.options[res]);
//     }
//     render (){
       
//         return (
//             <div>
//                 <button 
//                 onClick={this.randomOption}
//                 disabled= {!this.props.hasOption}
                
//                 >WHat should i do?</button>
//             </div>
//         );
//     }
// }



//   class Options extends React.Component{
//     render(){
//         return (<div>
//               <button onClick={ this.props.handleDeleteOptions }>Removal all</button>
//             {this.props.options.map( x => <Option key={x} optionText={x} />
//             )}
//             <Option />
//         </div>);
//     }
//   }

//   class Option extends React.Component{
   
//     render(){
//         return (
//             <div>
          
//               {this.props.optionText}
//             </div>
//         )
//     }
//   }
//   class AddOption extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.state = {
//             err: undefined
//         }
//     }
//     handleAddOption(event){
//         event.preventDefault();
      
//        const res = event.target.elements.option.value.trim();
//        const err = this.props.handleAddOption1(res);
//        event.target.elements.option.value = "";
//        this.setState(
//         () =>{
//             return {err: err};
//         }
//        );
      
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.err && <p style={{color:"red"}}>{this.state.err}</p>}
//                <form onSubmit={ this.handleAddOption }>
//                 <input type="text" name="option"/>
//                 <button>Add</button>
//                </form>
//             </div>
//         )
//     }
//   }

//   class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         }
//     }

//     handleAddOne(){
//        this.setState(
//         (prevState) =>{
//             // return   this.state.count = prevState.count + 1;
//             return {
//                 count: prevState.count + 1
//             }
//         }
//        );
//     }
//     handleMinusOne(){
//        this.setState(
//         (prevState) =>{
//             return {
//                 count: prevState.count - 1
//             }
//         }
//        );
//     }
//     handleReset(){
//        this.setState(
//         () =>{
//             return this.state.count = 0;
//         }
//        )
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Counter : {this.state.count}</h1>
//                 <button onClick={ this.handleAddOne }>+1</button>
//                 <button onClick={ this.handleMinusOne }>+1</button>
//                 <button onClick={ this.handleReset }>Reset</button>
//             </div>
//         )
//     }
//   }

 



// export default Header;
// // Render the Header component directly
// // ReactDOM.render(<Header />, document.getElementById("root"));

