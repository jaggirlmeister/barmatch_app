import Container from './styled';
import {Grid, Col, Inner, CardBar, InfoProfile} from 'components'
import { useProtected } from 'lib/useProtected';

const RandomBar = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;
    

    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <h1>RandomBar</h1>
                </Col>
                
            </Grid>
        </Inner>
    )
}

export default RandomBar