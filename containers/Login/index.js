import { LoginForm, Inner, Grid, Col} from 'components'
import Container from './styles';

const Login = () => {
    return (

        <Inner>
            <Container>
                <Grid>
                    <Col desktop={6} tablet={12} mobile={12}>
                        <h1>Welcome Back!</h1>
                        <h2>Es muy facil y está super copado.</h2>
                    </Col>
                    <Col desktop={6} tablet={12} mobile={12}>
                            <LoginForm />
                    </Col>
                </Grid>
            </Container>
        </Inner>
    )
}

export default Login