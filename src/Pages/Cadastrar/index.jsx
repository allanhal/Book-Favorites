import React from "react";
import { TitlePage } from "../../Components/Main";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { BtnDefaut } from "../../Components/Styled";
import { ContainerPage } from "./styled";

export default function Cadastrar() {
  return (    
      <ContainerPage>
        <TitlePage> Cadastrar </TitlePage>
        <h1 className="organize">
          <Link to="/">
            <ArrowBackIosIcon />
          </Link>
          Crie sua conta
        </h1>
        <p>Crie sua conta, é grátis!</p>
        <form>
          <div className="form--input">
            <label>Nome:</label>
            <input type="text"></input>
          </div>
          

          <div className="form--input">
            <label>E-mail:</label>
            <input type="e-mail"></input>
          </div>
          

          <div className="form--input">
            <label>Senha:</label>
            <input type="password"></input>
          </div>
          

          <BtnDefaut>Comece Agora!</BtnDefaut>

          <div className="footerLogin">
            Ja tem uma conta?
            <Link to="/">Fazer Login</Link>
          </div>
        </form>
      </ContainerPage>
    
  );
}
