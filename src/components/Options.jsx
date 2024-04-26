import React from "react";
import Option from "./Option";

const Options = (props) =>{
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options </h3>
                <button 
                className= "button button--link"
                onClick={ props.handleDeleteOptions }
                >Remove all</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">PLease add an option to get started!</p>}
            { props.options.map((x, index) => <Option 
            key={x} 
            optionText={x}
            count = {index + 1}
            handleDeleteOption = {props.handleDeleteOption}
            />) }
            
        </div>
    );
}

export default Options;