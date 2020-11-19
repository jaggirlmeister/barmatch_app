import Container from './styles';
import {Grid, Col} from 'components'

const Home = () => {
    return (
        <Grid>
            <Col desktop={12} tablet={12} mobile={12}>
                <Container>
                    <h1>Nothing Feels like Home</h1>
                </Container>
            </Col>
        </Grid>
    )
}

export default Home