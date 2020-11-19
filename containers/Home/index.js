import Container from './styles';
import {Grid, Col, Inner} from 'components'

const Home = () => {
    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <Container>
                        <h1>Nothing Feels like Home</h1>
                    </Container>
                </Col>
            </Grid>
        </Inner>
    )
}

export default Home