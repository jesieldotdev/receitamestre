import { MyContext } from "../../global/Context"
import { Description, HomeContainer, Title } from "./style"
import {useContext} from 'react'

const Home = () => {

    const {receptsList} = useContext(MyContext)

    console.log(receptsList)



    return (
        <HomeContainer>
            <Title>Receita Mestre</Title>
            <Description>
                Seu site de receitas compartilhadas.
            </Description>
            {JSON.stringify(receptsList)}


        </HomeContainer>
    )
}

export default Home