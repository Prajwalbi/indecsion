import React, {useState} from "react";
import OptionModal from "./OPtionModal";
import Action from "./Action";
import AddOption from "./AddOption";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Options from "./Options";

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
        const subtitle = "Let fate decide for you!";
        const title = "Decision Maker"
      
      return (
        <div>
           <Navbar subtitle={subtitle} title={title} />
          <div className="container">
            {/* {(this.state.options) ? <Action />} */}
            <Action 
                  hasOption={this.state.options.length > 0} 
                  options = {this.state.options} 
                  randomOption = { this.randomOption }
            />
            <div className="widget">
              <Options 
              options={this.state.options}  
              handleDeleteOptions = { this.handleDeleteOptions }
              handleDeleteOption = { this.handleDeleteOption }
              />
              <AddOption handleAddOption1={ this.handleAddOption1 }/>
              </div>
            {/* <Counter /> */}
          </div>
          <OptionModal selectedOption={this.state.selectedOption} 
          closeModal = { this.closeModal }
          modalContent = { this.state.modalContent } 
          />
        </div>
      );
    }
    
  }
  
  Indecision.defaultProps = {
        title: "Decision Maker"
    }

export default Indecision;