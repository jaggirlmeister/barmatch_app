import { Container } from './styled'

const CardBar = props => {
    return (
        <Container>
            <a href="#">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </Container> 
    )
}
export default CardBar;