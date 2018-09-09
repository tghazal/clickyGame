import React from "react";
import"./Header.css"

const Header = props => (
   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 text-light mt-5 parentPosition">
           
            <a className="navbar-brand mr-5" href="/">
                <h1>Clicky Game</h1>
            </a>
            <div className="ml-5">
            <h1 className="  mr-5 ml-5 text-danger" >
                {props.message}
            </h1>
            </div>
            <h1 className=" navbar-brand  mr-5 position" >
               Score = {props.score} AND  Top Score = {props.topScore}
            </h1>
        </nav>
      
);

export default Header;