import React from "react";
import { useState } from "react";
import { CarrinhoArea} from '../../Components/Main';
import {getItem, setItem} from "../../Services/LocalStorege";
import {BsFillCartDashFill} from "react-icons/bs";


const Carrinho = () => {
  const [data, setData] = useState ( getItem('teste01') || [])

  const removeItem = (obj) => {
    const arrFilter = data.filter ((livro) => livro.id !== obj.id)
    setData(arrFilter)
    setItem('teste01', arrFilter)
  }

const subTotal = data.reduce((acc, cur) => acc + cur.price,0)
    return (
      <CarrinhoArea>        
        <h3>{`SubTotal: R$ ${subTotal}`}</h3>
          <div>
            {
              data.map((livro) => (
                <div key={livro.id}>
                  <h4>{livro.title}</h4>
                  <img src={livro.capa} alt={livro.title} />
                  <h4>{`R$ ${livro.price}`}</h4>
                  <button
                    onClick={ () => removeItem(livro)}
                  >
                    <BsFillCartDashFill />
                  </button>
                </div>
              ))
            }
          </div>
      </CarrinhoArea>
    );
}

export default Carrinho;