import React from "react";
import { ContainerPage, TitlePage } from '../../Components/Main';
import { useEffect, useState } from "react";
import axios from "axios";

const Livros = () => {
const [livros, setLivros] = useState([])

useEffect(() => {
  axios.get("http://localhost:5000/books")
    .then((response) => {
    console.log(response.data)
    setLivros(response.data)
})
},[]);

    return (
      <ContainerPage>
        <TitlePage> Livros </TitlePage> 
        {JSON.stringify(livros)}       
      </ContainerPage>  
   );
}

export default Livros;