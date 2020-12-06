import { Container } from './styled'

const CardHome = props => {
    return (
        <Container>
            <a href={props.href}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </Container> 
    )
}
export default CardHome;