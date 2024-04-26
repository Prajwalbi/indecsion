import React, {useState} from "react";
import OptionModal from "../components/OPtionModal";

class Indecision extends React.Component {
    state = {
        // options : ["thingONe", "ThingTwo", "ThiongThree"]
        options: [],
        selectedOption: undefined,
        modalContent: undefined
    }
    componentDidMount(){
        try{
                console.log("fetched");
                const json = localStorage.getItem("options");
                const optionsRes = JSON.parse(json);
                if(optionsRes){
                    this.setState(() => ({options: optionsRes }));
                }
         }catch(e){
            
         }

    }

    componentDidUpdate(prevProps, prevState){
       if(prevState.options.length !== this.state.options.length){
        console.log("Previos state",prevState.options.length);
        console.log("this state",this.state.options.length);
        let json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saved Boss");
       }
      
    }
    handleDeleteOptions = () => {
        this.setState( () => ({options: []}));
    }
    handleDeleteOption = (option) => {
       this.setState(
        (prevState) => ( {
           options: prevState.options.filter(x => x != option)
         } )
       )
    }

    randomOption = () => {
        const res = Math.floor(Math.random() * this.state.options.length);
        // console.log(res);
        // alert(this.state.options[res]);
        this.setState(
           (prevState) => ({ selectedOption : true,
                    modalContent: prevState.options[res]
        })
        );
    }

    closeModal = () => {
        this.setState( () => ({ selectedOption:false }))
    }

    handleAddOption1 = (option) => {
        if(!option){
            return "Enter valid option";
        }else if(this.state.options.indexOf(option) > -1){
            return "This option is alrady present";
        }
      this.setState(
        (prevState) =>{
            return {options: prevState.options.concat(option) };
        }
      );
    }
    render() {
        // const title = "Indecision";
        const subtitle = "Catch up baby";
      
      return (
        <div>
          <Navbar subtitle={subtitle} />
          {/* {(this.state.options) ? <Action />} */}
          <Action 
                hasOption={this.state.options.length > 0} 
                options = {this.state.options} 
                randomOption = { this.randomOption }
          />
          <Options 
          options={this.state.options}  
          handleDeleteOptions = { this.handleDeleteOptions }
          handleDeleteOption = { this.handleDeleteOption }
          />
          <AddOption handleAddOption1={ this.handleAddOption1 }/>
          <Counter />
          <OptionModal selectedOption={this.state.selectedOption} 
          closeModal = { this.closeModal }
          modalContent = { this.state.modalContent } 
          />
        </div>
      );
    }
    
  }
  
  Indecision.defaultProps = {
        title: "Indecision"
    }

const Navbar = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
        </div>
    );
}

Navbar.defaultProps = {
    title: "Indecision"
}

const Options = (props) =>{
    return (
        <div>
            <button onClick={ props.handleDeleteOptions }>Remove all</button>
            { props.options.map(x => <Option 
            key={x} 
            optionText={x}
            handleDeleteOption = {props.handleDeleteOption}
            />) }
            
        </div>
    );
}

const Option = (props) =>{
    return (
        <div>
            { props.optionText }
            <button onClick={() => (props.handleDeleteOption(props.optionText))}>Delete</button>
        </div>
    );
}

  
class Action extends React.Component{
    constructor(props){
        super(props);
    }
    handlePick() {
        alert("handlePick clicked");
    }
   
    render (){
       
        return (
            <div>
                <button 
                onClick={this.props.randomOption}
                disabled= {!this.props.hasOption}
                
                >WHat should i do?</button>
            </div>
        );
    }
}



  


  class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            err: undefined
        }
    }
    handleAddOption(event){
        event.preventDefault();
       const res = event.target.elements.option.value.trim();
       const err = this.props.handleAddOption1(res);
       event.target.elements.option.value = "";
       this.setState( () => ({err: err}) );
    }

    render(){
        return (
            <div>
                {this.state.err && <p style={{color:"red"}}>{this.state.err}</p>}
               <form onSubmit={ this.handleAddOption }>
                <input type="text" name="option"/>
                <button>Add</button>
               </form>
            </div>
        )
    }
  }

  class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAddOne(){
       this.setState(
        (prevState) => ({count: prevState.count + 1}) )
          
    }
    handleMinusOne(){
       this.setState(
        (prevState) =>{
            return {
                count: prevState.count - 1
            }
        }
       );
    }
    handleReset(){
       this.setState(
        () =>{
            return this.state.count = 0;
        }
       )
    }
    render(){
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleMinusOne }>+1</button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        )
    }
  }



// export default Indecision;