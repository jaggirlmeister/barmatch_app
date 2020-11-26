import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(81, 64, 117, 0.3);
    border-radius: 15px;
    height: 250px;
    :hover{
        opacity: .8;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding:15px 30px;
    }

    p {
        font-size: 18px;
        color: #fff;
        font-family: 'Raleway';
        width: 100%;
        margin: 0;
    }

    h2{
        color:#fff; 
        font-family: 'ReemKufi'; 
        letter-spacing: .7px; 
        font-size: 34px; 
        font-weight: normal;
        width: 100%;
        margin: 0;
        padding-bottom: 20px;
    }

`;