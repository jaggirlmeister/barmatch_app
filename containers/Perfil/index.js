import Container from './styled';
import {Grid, Col, Inner, InfoProfile} from 'components'
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
            </Grid>
        </Inner>
    )
}

export default Perfil