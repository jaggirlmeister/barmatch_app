import Container from './styles';
import {Grid, Col, Inner, CardHome, InfoProfile} from 'components'
import { useProtected } from 'lib/useProtected';

const Home = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Inner>
            <Container>
                <Grid>
                    <Col desktop={12} tablet={12} mobile={12}>
                        <InfoProfile userId={auth.user.id} />
                        <p>¿Todavía no sabés a dónde salir? ¡Te ayudamos!</p>
                    </Col>

                    <Col desktop={4} tablet={12} mobile={12}>
                        <CardHome
                        href="/randombar"
                        title="RANDOM BAR" 
                        description="¿Te ayudamos a decidir? Pim, pum, pam.. ¡Bar!"
                        />
                    </Col>
                    <Col desktop={4} tablet={12} mobile={12}>
                        <CardHome 
                        title="BAR MATCH" 
                        description="¡Descubrí tu bar ideal basado en tus gustos! ¡Mandale mecha!"
                        />
                    </Col>
                    <Col desktop={4} tablet={12} mobile={12}>
                        <CardHome
                        href="/barmap"
                        title="BAR MAPS" 
                        description="¡Encontrá los mejores bares por tu zona! Turisteando bares... "
                        />
                    </Col>
                </Grid>
            </Container>
        </Inner>
    )
}

export default Home