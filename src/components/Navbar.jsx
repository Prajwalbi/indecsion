import React from "react";
const Navbar = (props) => (
    <div className="header">
        <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h1 className="header__subtitle">{props.subtitle}</h1>
        </div>
    </div>
);

Navbar.defaultProps = {
    title: "Indecision"
}

export default Navbar;