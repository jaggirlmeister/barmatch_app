import Container from './styled';
import {Grid, Col, Inner, CardBar, InfoProfile} from 'components'
import { useProtected } from 'lib/useProtected';

const Perfil = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;
    

    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <Container>
                        <div>
                            <div>
                                <InfoProfile userId={auth.user.id} />
                                <p>Estos son tus bares favoritos:</p>
                            </div>
                            <a href="/dashboard">
                                + Sugerir un Bar
                            </a>
                        </div>
                    </Container>
                </Col>
                
                <Col desktop={3} tablet={6} mobile={12}>
                    <CardBar />
                </Col>
                <Col desktop={3} tablet={6} mobile={12}>
                    <CardBar />
                </Col>
                <Col desktop={3} tablet={6} mobile={12}>
                    <CardBar />
                </Col>

            </Grid>
        </Inner>
    )
}

export default Perfil