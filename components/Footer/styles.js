import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        height: 2em;
    }

    img {
        margin-right: 20px;
        opacity: .8;
    }
    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 15px;
        color: #fff;
    }

`;