import Container from './styled';
//import React from 'react'
import {Grid, Col, Inner, CardBar, InfoProfile} from 'components'
import { useProtected } from 'lib/useProtected';
//import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const RandomBar = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;
    
    //const { width, height } = useWindowSize();
    const width = 1400;
    const height = 720;

    return (
        <Inner>
            <Grid>
                <Col desktop={12} tablet={12} mobile={12}>
                    <h1>RandomBar</h1>
                    <Confetti
                    width={width}
                    height={height}
                    />
                </Col>
                
            </Grid>
        </Inner>
    )
}

export default RandomBar