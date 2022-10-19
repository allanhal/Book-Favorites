import styled from "styled-components";

export const AreaHeader = styled.div`
  height: 60 pix;
  background-image: linear-gradient(to right, #fff, #370d44);
  color: #fff;

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }
  .logo {
    flex: 1;
        img {
         width: 56px;
    }
  }

  nav {
    ul {
      display: flex;
    }
        li {
         list-style: none;
         margin-left: 20px;
            a{
                text-decoration: none;
                color: #fff;

                &:hover{
                    color: #f58800;
                }
            }
    }
  }
`;
