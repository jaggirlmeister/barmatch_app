import { LoginForm, Inner } from 'components'
import Container from './styles';

const Login = () => {
    return (
        <Inner>
            <Container>
                <h1>Login</h1>
                <LoginForm />
            </Container>
        </Inner>
    )
}

export default Login