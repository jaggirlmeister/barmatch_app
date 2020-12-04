import Container from './styles';
import { useProtected } from 'lib/useProtected';
import { PostsForm ,ListPosts, Inner, Grid, Col } from 'components'


const Dashboard = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Inner>
            <Grid>
                <Col desktop={6} tablet={12} mobile={12}>
                    <Container>
                        <h1>Dashboard</h1>
                        <h2>{auth.user.email}</h2>
                        <PostsForm  userId={auth.user.id}/>
                        <ListPosts  userId={auth.user.id}/>
                    </Container>
                </Col>
            </Grid>
        </Inner>
    )
}

export default Dashboard