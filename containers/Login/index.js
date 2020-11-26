import { LoginForm, Inner, Grid, Col} from 'components'
import Container from './styles';

const Login = () => {
    return (

        <Inner>
            <Container>
                <Grid>
                    <Col desktop={6} tablet={12} mobile={12}>
                        <h1>Welcome Back!</h1>
                        <h2>Tu nuevo bar favorito te está esperando</h2>
                    </Col>
                    <Col desktop={6} tablet={12} mobile={12}>
                        <LoginForm />
                        <p>Pssst!.. Si todavía no tenés cuenta: <a href="/signup">Acá te podés abrir una</a></p>
                    </Col>
                </Grid>
            </Container>
        </Inner>
    )
}

export default Login