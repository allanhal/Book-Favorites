import styled from "styled-components";

export const CarrinhoArea = styled.div`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;


    .div {
        height: auto;
        width: 230px;
        border: 1px solid rgb(194, 193, 193);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 40px;

        button {
            font-size: 60px;
            background: transparent;
            border: none;
            color: teal;
        }
    }

`;