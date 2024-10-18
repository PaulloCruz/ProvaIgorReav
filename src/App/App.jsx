import Text from '../Text/Text'
import Container from '../Container/Container'
import { Geral } from '../styles/App'
import "./app.css"

const App = ()=>{
    return(
    <>
    
        <Geral>
        
        <Text titulo={"Learn to code by watching other"} escopo={'see how experience developers salve problems in real time watching scripted tutorials is reat but understanding how developers think is invaluable'} />

        <Container/>

        </Geral>
    
    </>
    )
}

export default App
