import { Input } from "../styles/App"


const Campos = ({type,nome,placeholder})=>{
    return(
        <>
        <Input type={type} className={nome} placeholder={placeholder}
    />
    </>
    )
}

export default Campos