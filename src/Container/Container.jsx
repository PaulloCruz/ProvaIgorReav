import Campos from "../Campos/Campos"
import Anuncio from "../Anuncio/Anuncio"
import {  ContainerDiv, ContainerDivForms, Geral } from "../styles/App"

const Container = () =>{       
    return(
        <>
        <ContainerDivForms>
        <Anuncio anuncio={'Try it free 7 days'}/>
        <ContainerDiv>
            <Campos
            type={'text'}
            placeholder={'digite primeiro nome'}
            nome={'nome'}
             />
             <Campos
            type={'text'}
            placeholder={'digite seu ultimo nome'}
            nome={'ultimo nome'}
             />
            <Campos
            type={'text'}
            placeholder={'digite seu email'}
            nome={'nome'}
             />
             <Campos
            type={'password'}
            placeholder={'digite sua senha'}
            nome={'senha'}
             />
    
        </ContainerDiv>
        </ContainerDivForms>
        </>
    )
}
  
export default Container