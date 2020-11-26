import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <a
                href="https://minimal.com.ar"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/logo.svg" alt="Minimal.ar Logo" className="logo" />
                <p>Buenos Aires, Argentina 2020</p>

            </a>
        </Container> 
    )
}
export default Footer;