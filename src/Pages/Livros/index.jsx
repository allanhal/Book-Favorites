import React from "react";
import { TitlePage } from "../../Components/Main";
import { ProductArea } from "../Livros/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import {BsFillCartPlusFill, BsFillCartCheckFill} from "react-icons/bs"
// importação do que esta na pasta SERVICES no src
import {getItem, setItem} from "../../Services/LocalStorege"

const Livros = () => {
const [livros, setLivros] = useState([]); 
// o getItem faz com que assim que atualizar a pagina o carrinho permanece inalteravel 
const [cart, setCart] = useState( getItem('teste01') || []); 

  useEffect(() => {
    axios.get("https://63b4b4cc9f50390584b7ea2a.mockapi.io/books").then((response) => {
      console.log(response.data);
      setLivros(response.data);
    });
// esse arrey vazio para ser feito quando a pagina for carregada
  }, []);

// criar a função handle que esta no onClick do button para ou 
// adicionar ou remover o livro do carrinho 
const handleCLick = (obj) => {
  const element = cart.find((livro) => livro.id === obj.id)
  if(element) {
    const arrFilter = cart.filter((livro) => livro.id !== obj.id)
    setCart(arrFilter)
    setItem('teste01', arrFilter)
  } else {
    setCart([...cart,obj])
    setItem('teste01', [...cart,obj])
  }
}

  return (
    <ProductArea>
      <TitlePage> Livros </TitlePage>
      {livros?.map((livro) => (
        <div key={livro._id}>
          <span>{livro._title}</span>{" "}
          <span>
            {livro.title} 
            <img src={livro.capa} alt="img" /> 
            <h2>{livro.autor}</h2> 
            <h4>{`R$ ${livro.price}`}</h4>       
          </span>
          <button
             onClick={() => handleCLick(livro)}
            >
            {
      // algum elemento que esta no carrinho ??
              cart.some((itemCart) => itemCart.id === livro.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )
            }
          </button>          
        </div>
      ))}
    </ProductArea>
  );
};

export default Livros;


