import styled from 'styled-components'

const Container = styled.div`
    min-height: 70vh;
    width:100%;
    text-align: left;

    h1{
        color: #fff;
    }

    >div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
            cursor: pointer;
            font-family: ReemKufi;
            background: rgb(52, 187, 187);
            border: 0px;
            color: rgb(255, 255, 255);
            padding: 10px 20px;
            border-radius: 15px;
            font-size: 19px;
            text-decoration: none;

            :hover{
                opacity: .8;
            }
        }
    }
`

export default Container;