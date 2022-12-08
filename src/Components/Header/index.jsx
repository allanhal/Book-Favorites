import React from "react";
import { AreaHeader } from "./styled";
import { Link } from "react-router-dom";

function Header() {

  return (
    <AreaHeader> 
      <div className="container">
        <div className="logo">
            <img alt="logo" src="../../../logo-text.png" />
        </div>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>            
            <li><Link to="/livros">Livros</Link></li>
            <li><Link to="/login">Login</Link></li>   
            <li><Link to="/cadastrar">Cadastrar</Link></li>    
            <li><Link to="/carrinho">Carrinho</Link></li>                
            <li><Link to="/profile">My Profile</Link></li>   
            <li><Link to="/logout">Sair</Link></li>            
          </ul>
        </nav>
      </div>
    </AreaHeader>
  );
}

export default Header;
