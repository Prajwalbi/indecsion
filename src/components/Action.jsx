import React from "react";

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
                <button className="big-button"
                onClick={this.props.randomOption}
                disabled= {!this.props.hasOption}
                
                >WHat should i do?</button>
            </div>
        );
    }
}

export default Action;