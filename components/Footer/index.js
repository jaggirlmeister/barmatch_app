import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/logo.svg" alt="BArMatch Logo" className="logo" />
                <p>Buenos Aires, Argentina 2020</p>

            </a>
        </Container> 
    )
}
export default Footer;