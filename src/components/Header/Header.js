import React from "react";
import"./Header.css"

const Header = props => (
   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-light mt-5">
            <a className="navbar-brand" href="/">
                Clicky Game
            </a>
            <h1 className=" navbar-brand mr-5 ml-5" >
                {props.message}
            </h1>
            <h1 className=" navbar-brand ml-5" >
               score = {props.score} AND  Top Score = {props.topScore}
            </h1>
        </nav>
      
);

export default Header;