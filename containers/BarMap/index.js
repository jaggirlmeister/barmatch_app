import Container from './styled';
import {Grid, Col, Inner, CardBar, InfoProfile, Map} from 'components'
import { useProtected } from 'lib/useProtected';

const BarMap = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;
    

    return (
        <>
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <h1>BarMap</h1>
                </Col>
            </Grid>
        </Inner>
        <Map />
        </>
    )
}

export default BarMap