import React from "react";
import { Link } from "react-router-dom";
import { AreaLogin } from "./styled";
import { BtnDefaultIcons, BtnDefaut } from "../../Components/Styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  return (
    <AreaLogin>
      <h1>Faça login em sua conta</h1>

      <BtnDefaultIcons>
        <FacebookIcon />
        <div className="center">Fazer login com o Facebook</div>
      </BtnDefaultIcons>

      <BtnDefaultIcons>
        <GoogleIcon />
        <div className="center">Fazer login com o Google</div>
      </BtnDefaultIcons>

      <p>OU</p>

      <form className="from--input">
        <h1> Logo aqui</h1>

        <div className="form--input">
          <label>Seu nome de usuário:</label>
          <input type="text"></input>
        </div>
        

        <div className="form--input">
          <label>Sua senha:</label>
          <input type="password"></input>
        </div>
        

        <BtnDefaut>Entrar</BtnDefaut>

        <div className="footerLogin">
          Não tem uma conta?
          <Link to="/Cadastrar">Registre-se</Link>
        </div>
      </form>
    </AreaLogin>
  );
}
