import { SignUpForm, Inner, Grid, Col } from 'components'
import Container from './styles';

const SignUp = () => {
    return (
        <Inner>
            <Container>
                <Grid>
                    <Col desktop={6} tablet={12} mobile={12}>
                        <h1>¡Unite a nuestra comunidad!</h1>
                        <h2>Es muy facil y está super copado. </h2>
                    </Col>
                    <Col desktop={6} tablet={12} mobile={12}>
                            <SignUpForm />
                    </Col>
                </Grid>
            </Container>
        </Inner>
    )
}

export default SignUp