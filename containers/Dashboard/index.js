import Container from './styles';
import { useProtected } from 'lib/useProtected';
import { PostsForm ,ListPosts, Inner, Grid } from 'components'


const Dashboard = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Inner>
            <Container>
                <h1>Dashboard</h1>
                <h2>{auth.user.email}</h2>
                <PostsForm  userId={auth.user.id}/>
                <ListPosts  userId={auth.user.id}/>
            </Container>
        </Inner>
    )
}

export default Dashboard