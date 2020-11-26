import Container from './styled';
import {Grid, Col, Inner} from 'components'

const Perfil = () => {
    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <Container>
                        <div>
                            <div>
                                <h1>Mi perfil</h1>
                                <p>Estos son tus bares favoritos:</p>
                            </div>
                            <a href="/dashboard">
                                + Sugerir un Bar
                            </a>
                        </div>
                    </Container>
                </Col>
            </Grid>
        </Inner>
    )
}

export default Perfil