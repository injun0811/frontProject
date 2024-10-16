import styled from 'styled-components'

export const AboutWrap = styled.div` 

    .videoDiv {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;

        .backgroundVideo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 50px;
        color: #FCC419;
    }
        .firstHeading { 
            font-size: 2.5em;
            margin-top: 20px;
        }

        .secondHeading {
            font-size: 2em;
            align-self: flex-end;
            margin-right: 100px;
        }
`