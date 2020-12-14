import { Container } from './styled'

const CardBar = props => {
    return (
        <Container>
            <a href="#">
                <img src="/uptown.jpg"></img>
                <h2>{props.title}</h2>
                <p>{props.locacion}</p>
                <p>{props.description}</p>
            </a>
        </Container> 
    )
}
export default CardBar;