import { Container } from './styled'

const CardBar = props => {
    return (
        <Container>
            <a href="#">
                <img src="/uptown.jpg"></img>
                <h2>Hola {props.title}</h2>
                <p>Este es un bar {props.description}</p>
            </a>
        </Container> 
    )
}
export default CardBar;