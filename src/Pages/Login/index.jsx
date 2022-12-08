import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AreaLogin } from "./styled";
import { BtnDefaultIcons, BtnDefaut } from "../../Components/Styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { setItem, getItem } from "../../Services/LocalStorege";

export const Login = (props) => {
  const user = getItem('usuario')

  const [name, setName] = useState(user.name || ' ')
  const [pass, setPass] = useState(user.pass || ' ')

  const cond = (name.length > 3 && pass.length > 5)


  const saveUser = (name, pass) => {
    const {history: {push}} = props;
    if(name === user.name && pass === user.pass) {
      push('/Livros')
      return;
    }
    setItem('usuario', {name, pass})
    push('/Livros')
  }

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

        {/* <div className="form--input">
          <label>Seu nome de usuário:</label>
          <input type="name"></input>
          onChange={({target:{value}}) => setPass(value)}
          value={name}
        </div>        

        <div className="form--input">
          <label>Sua senha:</label>
          <input type="password"></input>
          onChange={({target:{value}}) => setName(value)}
          value={pass}
        </div> */}

        <div>
          <p>Seu nome de usuário:</p>
          <input
            type="text"
            onChange={({ target: { value } }) => setName(value)}
            value={name}
          />

          <p>Sua senha:</p>
          <input
            type="password"
            onChange={({ target: { value } }) => setPass(value)}
            value={pass}
          />
          <br/> <br/>
        </div>
        <BtnDefaut 
        type="button" 
          onClick={() => saveUser (name, pass)}
        disabled={!cond}>
          Entrar
        </BtnDefaut>

        <div className="footerLogin">
          Não tem uma conta?
          <Link to="/Cadastrar">Registre-se</Link>
        </div>
      </form>
    </AreaLogin>
  );
}

export default Login;