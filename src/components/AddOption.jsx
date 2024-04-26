import React from "react";

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
                {this.state.err && <p className="add-option-error">{this.state.err}</p>}
               <form className="add-option" onSubmit={ this.handleAddOption }>
                <input className="add-option__input" type="text" name="option" style={{border: "1px solid black"}} />
                <button className="button">Add Option</button>
               </form>
            </div>
        )
    }
  }

  export default AddOption;