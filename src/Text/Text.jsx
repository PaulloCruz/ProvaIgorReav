import { TextDiv,H1,H3 } from '../styles/App'
const Text = ({titulo,escopo})=>{
    return(
        <>
        <TextDiv>
    <H1>{titulo}</H1>
    <H3>{escopo}</H3>
    </TextDiv>
    </>
    )
}

export default Text