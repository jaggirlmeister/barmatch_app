import Container from './styled';
import {Grid, Col, Inner} from 'components'

const Perfil = () => {
    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <Container>
                        <h1>¡Hola Lean!</h1>
                        <p>Estos son tus bares favoritos:</p>
                    </Container>
                </Col>
            </Grid>
        </Inner>
    )
}

export default Perfil