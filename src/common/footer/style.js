import styled from 'styled-components';

export const FooterWrap = styled.footer`
    background-color: #212121;
    .inner {
        height: 150px;
    }
    .info {
        display: flex;

        li {
            padding: 60px;
            font-size: 20px;

            a {
                color: #fcc419;
                transition: 0.3s;

                &:hover {
                    color: tomato;
                }
            }
        }
    }

    .family {
        position: absolute;
        top: 35px;
        right: 0;
        display: flex;

        li {
            padding: 20px;
            font-size: 20px;

            a {
                img {
                    width: 30px;
                    transition: 0.5s;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
`;
