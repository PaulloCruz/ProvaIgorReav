import { styled } from "styled-components";
// import { Link } from "react-router-dom";

const cores = {
    Black:"hsl(0,0%,0%)",
    White:"hsl(0,0%,100%)",
    AzulSecundario: "#acdee1",
    AzulPrincipal: '#17d4dc',
};

// App

export const Geral = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 1000px;
`

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
`
// -----------app^^^--------

// text
export const TextDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 100px;
    font-size: 20px;
    margin-right: 30px;
`
export const H1 = styled.h1`
    color: ${cores.White};
    font-weight:600;
`
export const H3 = styled.span`
    color: ${cores.White};
    font-size:16px;
`
// -----------------text^^^---------

// container
export const ContainerDiv = styled.div`
    background-color:${cores.White};
    height:300px;
    width:300px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    gap: 10px   ;
    align-items: center;
    justify-content: center;
 `
export const ContainerDivForms = styled.div`
    gap: 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `


// ----------------container^^--------------

// Campos
export const Input = styled.input`
  width: 200px;
  height: 30px;
  color: black;
  background-color: white;
  font-size: 10px;
  border-radius: 10px;
`
export const AnuncioDiv = styled.div`
  color:${cores.White};
  height: 30px;
  background-color: hsl(248, 32%, 49%);
  width: 300px;
  border-radius: 5px;  
  display: flex;
  align-items: center;
  justify-content: center;
`
// --------------campos^^-------------



export const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  background:${cores.White};
  box-shadow: 5px 0 30px rgba(0,0,0,.1);
  color:${cores.AzulPrincipal};
`;

export const DivLogo = styled.div`
display:flex;
align-items:center;
`;

export const DivNavItens = styled.div`  
display:flex;
justify-content: space-around;
flex-direction:row;
`
