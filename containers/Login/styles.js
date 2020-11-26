import styled from 'styled-components'

const Container = styled.div`
    min-height: 70vh;
    h1{ color:#fff; }
    h2{ color:#fff; font-size: 20px; }
    display: flex;
    align-items: center;

    p{
        margin: 0;
        margin-top: 30px;
    }

    a{
        color: #34BBBB;
        text-decoration: none;
        :hover{
            opacity:.8;
        }
    }
`

export default Container;