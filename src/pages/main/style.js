import styled from 'styled-components';

export const MainWrap = styled.div`
    &.main {
    }
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
`;

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
        padding: 30px;
        color: #fcc419;

        .firstHeading {
            user-select: none;
            font-size: 50px;
            margin-top: 33%;
        }

        .secondHeading {
            user-select: none;
            font-size: 35px;
            margin-right: 50px;
        }
    }
`;
